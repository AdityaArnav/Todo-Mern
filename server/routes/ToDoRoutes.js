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
      res.status(200).json("Item Added Successfully");
    }catch(err){
        res.send(err);
    }
})

// exporting router
module.exports = router;