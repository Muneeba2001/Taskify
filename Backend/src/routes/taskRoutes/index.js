import express from "express";
import taskController from "../../controller/task.js";
import authMiddleware from "../../middleware/authMiddleWare.js";

const taskRouter = express.Router();

taskRouter.post("/create", authMiddleware.authUser ,taskController.createTask);
taskRouter.get("/getTask", authMiddleware.authUser, authMiddleware.authToken, taskController.getTasks);
taskRouter.get(
  "/getTask/:id",
  authMiddleware.authUser,
  authMiddleware.authToken,
  taskController.getTaskById
);
taskRouter.put(
  "/updateTask/:id",
  authMiddleware.authUser,
  authMiddleware.authToken,
  taskController.updateTask
);
taskRouter.delete(
  "/deleteTask/:id",
  authMiddleware.authUser,
  authMiddleware.authToken,
  taskController.deleteTask
);
export default taskRouter;
