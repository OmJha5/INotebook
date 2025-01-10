let Router = require('router')
let User = require("../models/User.js")
const { body, validationResult } = require('express-validator');
let router = Router()

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
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        let result = await newUser.save(); 
        res.send("User is created...");
    } catch (err) {
        res.status(500).send(err); 
    }

})

module.exports = router;