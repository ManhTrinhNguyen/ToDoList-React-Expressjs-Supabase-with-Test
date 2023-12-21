const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANNON_KEY);

async function httpGetAllLists(req, res) {
    let { data, error } = await supabase
    .from('todo-lists')
    .select('*')

  res.status(200).json(data)
}

async function httpGetListById(req, res) {
  const id = req.params.id;

  let { data, error } = await supabase
    .from('todo-lists')
    .select()
    .eq('id', id)
   
  res.status(200).send(data)
}

async function httpCreateList(req, res) {
  const { todo, description } = req.body
  let date = new Date()

  if (!todo || !description || !date) {
    return res.status(400).json({
      error: 'Missing Property Required'
    })
  };

  const { data, error } = await supabase
    .from('todo-lists')
    .insert([
      {
        todo: todo,
        description: description,
        created_at: date.toLocaleString()
      }
    ])
    .select();
  
  //if (error) console.log(error);

  res.status(201).send(data);
}

async function httpUpdateList(req, res) {
  const { todo, description } = req.body
  const id = req.params.id;
  const { data, error } = await supabase
    .from('todo-lists')
    .update({
      todo: todo,
      description: description
    })
    .eq('id', id)
    .select();
  
  if (error) console.log(error)

  res.status(200).send(data)
}

async function httpDeleteList(req, res) {
  const id = req.params.id;
  const { data, error } = await supabase
    .from('todo-lists')
    .delete()
    .eq('id', id);
  
  res.status(202).send(data)
}

module.exports = {
  httpGetAllLists,
  httpGetListById, 
  httpCreateList, 
  httpUpdateList, 
  httpDeleteList
}