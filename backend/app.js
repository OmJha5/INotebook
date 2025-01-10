let express = require("express")
let app = express()
let authRouter = require("./Router/auth.js")
let notesRouter = require("./Router/note.js")
let main = require("./db.js")

main()

app.use(express.json())
app.use("/api/auth" , authRouter)
app.use("/api/notes" , notesRouter)

app.get("/" , (req , res) => {
    res.send("Home Page")
})

app.listen("8080" , () => {
    console.log("Listining on port 8080")
})