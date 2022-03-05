import bycrypt from "bcrypt"; // => to compare the password
import jwt from "jsonwebtoken";
import { getByID } from "../../model/task.js";
import { getUser } from "../../model/user.js";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const GetByID = async (req, res) => {
  // get jwt token from header
  const { jwt_token } = req.headers;
  const task_id = req.params.id;
  if (!jwt_token) {
    res.status(401).json({
      message: "Unauthorized",
    });
    return;
  }
  if (!task_id || task_id === "") {
    res.status(400).json({
      message: "Bad Request",
    });
    return;
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
    // add task to database
    const result = await getByID({ id: task_id });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default GetByID;
