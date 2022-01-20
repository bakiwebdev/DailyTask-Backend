import express from "express";
import taskRouter from "./routers/taskRouter.js";

const app = express();
app.use(express.json());
app.use('/task', taskRouter);

export default app;