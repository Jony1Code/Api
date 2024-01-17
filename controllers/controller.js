const { model } = require("../models/index");

exports.getAllTodo = async (req, res) => {
  try {
    const todos = await model.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title = "", description = "" } = req.body;
    if (!title || !description) {
      throw new Error("Missing data");
    }
    const todo = await model.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title = "", description = "", isCompleted } = req.body;
    const todo = await model.findByPk(id);
    if (!todo) {
      throw new Error("No task found");
    }
    await todo.update({ title, description, isCompleted });
    res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await model.findOne({ where: { id } });
    if (!todo) {
      throw new Error("This task was not found");
    }
    res.status(200).json(todo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await model.findOne({ where: { id } });
    if (!todo) {
      throw new Error("Unexpected error");
    }
    await model.destroy({ where: { id } });
    res.status(200).send("Success");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
