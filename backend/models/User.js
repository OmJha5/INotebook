let mongoose = require("mongoose")
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name : {
        type : String , 
        required : true
    },

    email : {
        type : String ,
        required : true,
    },

    password : {
        type : String,
        required : true,
    },

    date : {
        type : String,
        default : Date.now
    }
})

const User = mongoose.models.User || mongoose.model('User', UserSchema); // Check if model is already compiled

module.exports = User
