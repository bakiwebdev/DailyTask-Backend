import bycrypt from "bcrypt"; // => to compare the password
import jwt from "jsonwebtoken";
import { getByID, updateAllToComplete, updateTask } from "../../model/task.js";
import { getUser } from "../../model/user.js";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const UpdateTask = async (req, res) => {
  const { jwt_token } = req.headers;
  const { completed } = req.query;
  if (!jwt_token) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    const { id, username } = jwt.verify(jwt_token, JWT_SECRET);
    const user = await getUser({ username });
    // check if the id is the same as the user id
    if (user._id.toString() !== id) {
      res.status(401).json({
        message: "Unauthorized",
      });
      return;
    }
    if (completed) {
      const result = await updateAllToComplete({ userId: id });
      res.status(200).json({
        message: "All task is completed",
        result,
      });
      return;
    }
    const task = req.body;
    const task_id = req.params.id;
    if (!task) {
      res.status(400).json({
        message: "Bad Request",
      });
      return;
    }
    if (!task_id || task_id === "") {
      res.status(400).json({
        message: "Bad Request",
      });
      return;
    }
    // check if the task belongs to the user
    const user_task = await getByID({ id: task_id });
    if (user_task.userId.toString() !== id) {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
    // get task property
    const newData = {};
    const { title, description, isCompleted } = task;
    if (title) {
      newData.title = title;
    }
    if (description) {
      newData.description = description;
    }
    if (isCompleted) {
      newData.isCompleted = isCompleted;
    }
    // update task by id
    const result = await updateTask(task_id, newData);
    res.status(201).json({
      message: "Task added",
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default UpdateTask;
