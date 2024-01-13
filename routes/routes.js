const express = require("express");
const router = express.Router();

const { getAllTodo, createTodo } = require("../controllers/controller");

router.get("/", getAllTodo);
router.post("/", createTodo);

module.exports = router;
