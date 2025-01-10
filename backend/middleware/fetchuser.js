const jwt = require('jsonwebtoken');


const fetchuser = (req , res , next) => {
    let token = req.header("auth-token")

    if(!token){
        return res.status(401).send("Please authenticate using a valid token 1")
    }

    try{
        const data = jwt.verify(token , "shhhhh")
        req.id = data.id
    }
    catch(err){
        return res.status(401).send("Please authenticate using a valid token 2")
    }

    next()
}

module.exports = fetchuser