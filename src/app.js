const express = require('express');
const app = express();

app.use(express.json());

let todos = []

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.get("/todos",(req, res) => {
    res.json(todos)
})


app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
