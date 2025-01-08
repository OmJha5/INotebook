let mongoose = require("mongoose")
const Schema = mongoose.Schema;

let NotesSchema = new Schema({
    title : {
        type : String , 
        required : true
    },

    description : {
        type : String ,
        required : true,
    },

    tag : {
        type : String,
        default : "General",
    },

    date : {
        type : String,
        default : Date.now
    }
})

const Notes = mongoose.models.Notes || mongoose.model('Notes', NotesSchema); // Check if model is already compiled
module.exports = Notes
