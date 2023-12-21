const express = require('express');
const {httpGetAllLists, httpGetListById, httpCreateList, httpUpdateList, httpDeleteList} = require('./todo.controller')

const todoRouter = express.Router();


// Get all Todo List
todoRouter.get('/', httpGetAllLists);

// Get Todo List by id 
todoRouter.get('/:id', httpGetListById);

// Post Todo List
todoRouter.post('/', httpCreateList);

// Update List 
todoRouter.put('/:id', httpUpdateList);

// Delete List 
todoRouter.delete('/:id', httpDeleteList)


module.exports = todoRouter