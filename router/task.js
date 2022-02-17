import express from "express";
import PostTask from "../controller/task/post_task.js";
import GetTask from "./../controller/task/get_task.js";

const route = express.Router();

route.get("/:id", GetTask);
route.post("/:id", PostTask);
route.put("/", (req, res) => {
  res.send("task put response");
});
route.patch("/", (req, res) => {
  res.send("task patch response");
});
route.delete("/", (req, res) => {
  res.send("task delete response");
});

export default route;
