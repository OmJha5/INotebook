let express = require("express")
let app = express()
let authRouter = require("./router/auth.js")
let notesRouter = require("./router/notes.js")

app.use("/api/auth" , authRouter)
app.use("/api/notes" , notesRouter)
app.use(express.json())

app.get("/" , (req , res) => {
    res.send("Home Page")
})

app.listen("8080" , () => {
    console.log("Listining on port 8080")
})