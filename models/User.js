const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    weight:{
        type:String,
    },
    height:{
        type:String,
    },
    age:{
        type:Number,
    },
    upVotes:{
        type:Number,
        default: 0
    },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;