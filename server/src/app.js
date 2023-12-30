const express = require('express')
const todoRouter = require('./router/todo.router')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// router
app.use('/todo', todoRouter)

module.exports = app