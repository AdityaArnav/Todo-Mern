// const {Router} = require('express');

// const router = Router()
// const {getToDo,saveToDo,deleteToDo, updateToDo} = require('../controllers/ToDoController')

// router.get('/get-todo',getToDo);
// router.post('/save-todo',saveToDo);
// router.delete('/delete-ToDo', deleteToDo);
// router.put('/update-ToDo',updateToDo);

// module.exports = router;

const router = require('express').Router();

// importing todo Model;
const todoItemsModel = require('../models/todoItems');

// Creating first route -- i will add Todo item to my database.
router.post('/api/item', async (req, res)=>{
    try{
      const newItem = new todoItemsModel({
        item : req.body.item
      })
    //   save this item in database
      const saveItem = await newItem.save();
      res.status(200).json(saveItem);
    }catch(err){
        res.send(err);
    }
})

//creating second route to get all data
router.get('/api/item',async (req,res)=>{
try{
const allTodoItems = await todoItemsModel.find({});
// Returning all items in database in json format
res.status(200).json(allTodoItems);
}
catch(err){
  res.json(err);
}
})

// Creating third route to get data by id
router.get('/api/item/:id', async (req,res)=>{
  try{
    // finding the item by its id
    const getItemById = await todoItemsModel.findById(req.params.id)
    res.status(200).json(getItemById);
  }
  catch(err){
    res.json(err);
  }
})

// Creating fourth route to update data.
router.put('/api/item/:id', async (req,res)=>{
  try{
    // finding the item by its id and updating it...
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json('item updated');
  }
  catch(err){
    res.json(err);
  }
})

// creating fifth route to delete data...
router.delete('/api/item/:id',async (req,res)=>{
  // finding the item by its id and delted it...
  try{
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item deleted');
  }
  catch(err){
    res.json(err);
  }
})





// exporting router
module.exports = router;