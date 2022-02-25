import bycrypt from "bcrypt"; // => to compare the password
import jwt from "jsonwebtoken";
import { getByID, updateTask } from "../../model/task.js";
import { getUser } from "../../model/user.js";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const UpdateTask = async (req, res) => {
  const { jwt_token } = req.headers;
  const task = req.body;
  const task_id = req.params.id;
  if (!jwt_token) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
  if (!task) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
  if (!task_id || task_id === "") {
    res.status(400).json({
      message: "Bad Request",
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
    const { title, description, priority, status } = task;
    if (title) {
      newData.title = title;
    }
    if (description) {
      newData.description = description;
    }
    if (priority) {
      newData.priority = priority;
    }
    if (status) {
      newData.status = status;
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
