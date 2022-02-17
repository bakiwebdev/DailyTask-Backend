import express from "express";
import task_router from "./router/task.js";

const app = express();

app.use(express.json());
app.use("/task", task_router);

export default app;
