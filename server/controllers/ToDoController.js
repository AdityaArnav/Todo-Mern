// const ToDoModel = require('../models/ToDoModel.js');

// module.exports.getTodo = async (req,res)=> {
//     const Todo = await ToDoModel.find();
//     res.send(Todo);
// }

// module.exports.saveToDo = async (req,res)=>{
//     const { text }  = req.body;
//     ToDoModel
//     .create({text})
//     .then(()=>res.send(200).send('Added successfully...'))
//     .catch((err)=>console.log(err));
// }
// module.exports.deleteToDo =(req,res)=>{
//     const {_id} =req.body;
//     ToDoModel.findByIdAndDelete(id)
//     .then(()=>res.set(200).send('Deleted successfully...'))
//     .catch((err)=> console.log(err));
// }

// module.exports.updateTodo = (req,res)=>{
//     const {_id, text } = req.body;

//     ToDoModel.findByIdAndUpdate(_id,{text})
//     .then(()=>res.set(200).send('updated successfully...'))
//     .catch((err)=>console.log(err));
// }

