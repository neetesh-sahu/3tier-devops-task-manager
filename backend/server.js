const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
// Schema
const TaskSchema = new mongoose.Schema({

  task: {
    type: String,
    required: true
  },

  completed: {
    type: Boolean,
    default: false
  }

});

// Model
const Task = mongoose.model("Task", TaskSchema);

// GET TASKS
app.get("/tasks", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

// ADD TASK
app.post("/tasks", async (req, res) => {

  try {

    const newTask = new Task({
      task: req.body.task
    });

    await newTask.save();

    res.json(newTask);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

// DELETE TASK
app.delete("/tasks/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted"
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

// TOGGLE COMPLETE
app.put("/tasks/:id", async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    task.completed = !task.completed;

    await task.save();

    res.json(task);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

app.listen(5000, () => {

  console.log("Server running on port 5000");

});