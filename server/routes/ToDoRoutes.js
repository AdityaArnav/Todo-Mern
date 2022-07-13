const {Router} = require('express');

const router = Router()
const {getToDo,saveToDo,deleteToDo, updateToDo} = require('../controllers/ToDoController')

router.get('/get-todo',getToDo);
router.post('/save-todo',saveToDo);
router.delete('/delete-ToDo', deleteToDo);
router.put('/update-ToDo',updateToDo);

module.exports = router;
