import bycrypt from "bcrypt"; // => to compare the password
import jwt from "jsonwebtoken";
import { addTask } from "../../model/task.js";
import { getUser } from "../../model/user.js";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const AddTask = async (req, res) => {
  const { jwt_token, task } = req.body;
  console.log(jwt_token, task);
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
  try {
    const { id, username } = jwt.verify(jwt_token, JWT_SECRET);
    const user = await getUser({ username });
    // check if the id is the same as the user id
    if (user._id.toString() !== id) {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
    // get task property
    const { title, description, priority, status } = task;
    if (!title || !description || !priority || !status) {
      res.status(400).json({
        message: "Bad Request",
      });
    }
    // add task to database
    const result = await addTask({
      title,
      description,
      priority,
      status,
      userId: id,
    });
    res.status(201).json({
        message: "Task added",
        result
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default AddTask;
