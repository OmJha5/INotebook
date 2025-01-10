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

router.put("/updateNote/:id" , [
    body("title" , "Title must be atleast 2 characters").isLength({min : 2}),
    body("description" , "Description must be atleast 5 characters").isLength({min : 5}),

] ,  fetchuser , async(req , res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({"errors" : errors.array()})
    }
    
    try{
        let newNote = {}
        let {title , description , tag} = req.body
        if(tag) newNote.tag = tag
        newNote.title = title
        newNote.description = description
        let currNote = await Note.findById(req.params.id)
        if(!currNote) return res.send("Please enter valid Note")

        if(req.id.toString() != currNote.Owner.toString()){
            res.status(400).send("Not Allowed to update")
        }

        let note = await Note.findByIdAndUpdate(req.params.id , { ...newNote } , {new : true})
        res.send(note)
    }
    catch (err) {
        res.status(500).send("Internal server error"); 
    }
    
})


router.delete("/deleteNote/:id" , fetchuser , async(req , res) => {

    try{
        let currNote = await Note.findById(req.params.id)
        if(!currNote) return res.send("Please enter valid Note")

        if(req.id.toString() != currNote.Owner.toString()){
            res.status(400).send("Not Allowed to update")
        }

        await Note.findByIdAndDelete(req.params.id)
        res.send("Successfully Deleted")
    }
    catch (err) {
        res.status(500).send("Internal server error"); 
    }
})

module.exports = router;