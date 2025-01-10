let Router = require('router')
let User = require("../models/User.js")
const { body, validationResult } = require('express-validator');
let router = Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser.js")

router.post("/signup" , [
    body("name" , "Name must be atleast 2 characters").isLength({min : 2}),
    body("email" , "Please enter a valid email").isEmail(),
    body("password" , "Password must be atleast 5 characters").isLength({min : 5}),

]  , async (req , res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({"errors" : errors.array()})
    }

    try {

        const salt = bcrypt.genSaltSync(10);
        const secPassword = bcrypt.hashSync(req.body.password, salt);

        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: secPassword
        });
        await newUser.save(); 

        const JWT_Token = jwt.sign({ id: newUser._id }, 'shhhhh');

        res.send(JWT_Token)
    } catch (err) {
        res.status(500).send(err); 
    }

})

router.post("/login" , [
    body("email" , "Please enter a valid email").isEmail(),
    body("password" , "Password Must Not be Blank").exists(),

]  , async (req , res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({"errors" : errors.array()})
    }

    try {
        let {email , password} = req.body
        let user = await User.findOne({email : email})
        if(!user){
            return res.status(400).send("Please enter valid credentials!")
        }

        let isPresent = await bcrypt.compare(password , user.password)
        if(!isPresent){
            return res.status(400).send("Please enter valid credentials!")
        }

        const JWT_Token = jwt.sign({ id: user._id }, 'shhhhh'); // payload pe kind of stamp lag chuka hai secret ka.

        res.send(JWT_Token)
    } catch (err) {
        res.status(500).send("Internal server error"); 
    }

})

router.get("/fetchuser" , fetchuser , async(req , res) => {
    let id = req.id;
    let user = await User.findById(id).select("-password")
    res.send(user)
})

module.exports = router;