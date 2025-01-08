let Router = require('router')
let Notes = require("../models/Notes.js")
let router = Router()

router.get("/" , (req , res) => {
    res.send("Notes path triggered")
})

module.exports = router;