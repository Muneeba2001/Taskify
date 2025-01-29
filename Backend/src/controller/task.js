import Task from "../model/taskModel.js";
import jwt from "jsonwebtoken";

const taskController = {
  createTask: async (req, res) => {
    try {
      const { title, description, status, priority, dueDate, createdBy, assignedTo } =
        req.body;
        console.log("req.body", req.body)
      const task = new Task({
        title,
        description,
        status,
        priority,
        dueDate,
        createdBy: req.user._id,
        assignedTo,
      });
      console.log(task)
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
      console.log(error)
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({ createdBy: req.user._id }).populate(
        "assignedTo",
        "username email"
      );
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getTaskById: async (req, res) => {
    try {
      const task = await Task.findOne({
        _id: req.params.id,
        createdBy: req.user._id,
      }).populate("assignedTo", "username email");

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateTask: async (req, res) => {
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.params.id, createdBy: req.user._id },
        req.body,
        { new: true, runValidators: true }
      );

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const task = await Task.findOneAndDelete({
        _id: req.params.id,
        createdBy: req.user._id,
      });

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
export default taskController;
