let Router = require('router')
let User = require("../models/User.js")
const { body, validationResult } = require('express-validator');
let router = Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/" , [
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

module.exports = router;