const { model } = require("../models/index");

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await model.findAll();
    res.status(200).json(todos);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await model.create(req.body);
    res.status(200).json(todo);
  } catch {
    res.status(500).json({ message: error.message });
  }
};
