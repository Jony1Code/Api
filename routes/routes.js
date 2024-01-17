const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  updateTodo,
  getTodoById,
  deleteTodo,
} = require("../controllers/controller");

router.get("/:id", getTodoById);
router.get("/", getAllTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
