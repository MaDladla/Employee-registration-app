const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,

        required: true
    },

    position: {
        type: String,
        required: true

    },

    location: {
        type: String,

        
        required:true
    },

    email: {
        type: String,

        required:true
    }


})

const user= mongoose.model("user", userSchema);
module.exports = user;

