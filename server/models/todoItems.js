// const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//     text:{
//         type: String,
//         required: true
//     }
// })
// module.exports =mongoose.model('ToDoUser',todoSchema,)


// importing mongoose to create a new Schema
const mongoose = require('mongoose');

// creating Schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

// exporting this Schema
module.exports = mongoose.model('todo',TodoItemSchema);