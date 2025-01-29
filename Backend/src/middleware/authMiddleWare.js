import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import BlackListToken from "../model/blackListToken.js";
import TaskModel from "../model/taskModel.js";

const authMiddleware = {
  authUser: async (req, res, next) => {
    let token =
      req.cookies.token || req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    const isBlackListed = await BlackListToken.findOne({ token: token });
    if (isBlackListed) {
      return res
        .status(401)
        .json({ message: "Access denied. Token blacklisted." });
    }

    try {
      const decoded = jwt.decode(token);

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(verified._id);
      if (!req.user) {
        return res.status(401).json({ message: "User not found." });
      }

      next();
    } catch (ex) {
      return res.status(400).json({ message: "Invalid token." });
    }
  },

  authToken: async (req, res, next) => {
    try {
      const taskId = req.params.id;
      const task = await TaskModel.findById(taskId);
      console.log("Found Task:", task);

      if (!task) {
        return res.status(404).json({ message: "Task not found." });
      }

      if (String(task.createdBy) !== String(req.user._id)) {
        return res.status(403).json({
          message: "Access denied. Not authorized to access this task.",
        });
      }

      req.task = task;
      next();
    } catch (error) {
      return res.status(500).json({ message: "An error occurred." });
    }
  },
};

export default authMiddleware;
