import taskRouter from "./taskRoutes/index.js";
import userRouter from "./userRoutes/index.js";

const appRouter = [userRouter, taskRouter];
export default appRouter;