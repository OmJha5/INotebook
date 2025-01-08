let express = require("express")
let app = express()


app.get("/" , (req , res) => {
    res.send("Home Page")
})

app.listen("8080" , () => {
    console.log("Listining on port 8080")
})