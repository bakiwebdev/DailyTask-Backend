import express from "express";
// import task_router from "./router/task.js";
import auth_router from "./router/auth.js";

const app = express();

app.use(express.json());
app.use("/auth", auth_router);
app.use("/user", (req, res) => { res.send("user response") });
// app.use("/task", task_router);

export default app;
