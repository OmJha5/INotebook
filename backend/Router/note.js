let Router = require('router')
let Note = require("../models/note.js")
let router = Router()
const { body, validationResult } = require('express-validator');
const fetchuser = require("../middleware/fetchuser.js")

router.get("/fetchAllNotes" , fetchuser , async(req , res) => {
    try{
        let allNotes = await Note.find({Owner : req.id})
        res.send(allNotes)
    } catch (err) {
        res.status(500).send("Internal server error"); 
    }
})

router.post("/addNote" , [
    body("title" , "Title must be atleast 2 characters").isLength({min : 2}),
    body("description" , "Description must be atleast 5 characters").isLength({min : 5}),

] ,  fetchuser , async(req , res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({"errors" : errors.array()})
    }

    try{
        let { title , description , tag } = req.body;
        let newNote = new Note({
            title , description , tag , Owner : req.id
        })

        await newNote.save();

        res.send(newNote)
    }
    catch (err) {
        res.status(500).send("Internal server error"); 
    }

})

module.exports = router;