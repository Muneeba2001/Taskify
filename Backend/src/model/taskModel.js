import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  dueDate: {
    type: Date,
    required: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  socketId: {
        type: String,
      },
});

TaskSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
};

TaskSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
