const ToDoModel = requie('../models/ToDoModel.js');

module.exports.getTodo = async (req,res)=> {
    const Todo = await ToDoModel.find();
    res.send(Todo);
}

module.exports.saveToDo = async (req,res)=>{
    const Todo = await ToDoModel.find ();
}