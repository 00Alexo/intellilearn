const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    last_name : {
        type: String,
        required: true
    },
    first_name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    status : {
        type: String,
    },
    user_photo: {
        type: String,
    },
    school : {
        type: String,
    },
    major : {
        type: String,
    },
    subjects : {
        type: Array,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    classrooms : {
        type: Array,
        required: true
    },
    bio : {
        type: String,
    },
    tags : {
        type: Array,
    },
    age : {
        type: String,
        required: true
    },
    gender : {
        type: String, 
        required: true
    },
    stars :{
        type: Number,
    },
    starVotes : {
        type: Array,
    },
    prompts : {
        type: Array,
    },
    submissions: {
        type: Array,
    },
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)