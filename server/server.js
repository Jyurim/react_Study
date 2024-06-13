const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  setTimeout(next, 1000);
});
let todos = [];

app.get("/", (req, res) => {
  res.send("Hello Snifer!");
});

app.get("/todo", (req, res) => {
  res.json(todos);
  res.status(200).send();
});

// text - string
app.post("/todo", (req, res) => {
  const { text } = req.body;
  const newTodo = {
    id: uuidv4(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

app.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  res.json(todos.find((todo) => todo.id === id));
  res.status(200).send();
  // const response = todos.find((todo) => todo.id === id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
