const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;