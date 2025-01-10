let mongoose = require("mongoose")
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name : {
        type : String , 
        required : true,
        unique : true
    },

    email : {
        type : String ,
        required : true,
        unique : true
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

console.log("User Page")
const User = mongoose.models.User || mongoose.model('User', UserSchema); // Check if model is already compiled
User.createIndexes()
module.exports = User
