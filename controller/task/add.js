import bycrypt from "bcrypt"; // => to compare the password
import jwt from "jsonwebtoken";
import { addTask } from "../../model/task.js";
import { getUser } from "../../model/user.js";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const AddTask = async (req, res) => {
  const { jwt_token } = req.headers;
  const { task } = req.body;
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
    const { title, description } = task;
    if (!title || !description) {
      res.status(400).json({
        message: "Bad Request",
      });
    }
    // dateTime format
    const date_ob = new Date();
    const day = ("0" + date_ob.getDate()).slice(-2);
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    const year = date_ob.getFullYear();
    const date = day + "-" + month + "-" + year;
    const hours = date_ob.getHours();
    const minutes = date_ob.getMinutes();
    const seconds = date_ob.getSeconds();
    const time = hours + ":" + minutes + ":" + seconds;
    // end dateTime format
    // add task to database
    const result = await addTask({
      title,
      description,
      dateTime: {
        date: date,
        time: time,
      },
      isCompleted: false,
      userId: id,
    });
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

export default AddTask;
