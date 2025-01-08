let Router = require('router')
let User = require("../models/User.js")
let router = Router()

router.get("/" , (req , res) => {
    res.send("Auth path triggered")
})

module.exports = router;