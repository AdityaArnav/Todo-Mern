const mongoose = require('mongoose');

const todoSchema = new mongoose.schemaa({
    text:{
        type: String,
        required: true
    }
})