const express = require('express')
const todoRouter = require('./router/todo.router')



const app = express();

app.use(express.json());

// router
app.use('/todo', todoRouter)

module.exports = app