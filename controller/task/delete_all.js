import bycrypt from "bcrypt"; // => to compare the password
import jwt from "jsonwebtoken";
import { deleteAll } from "../../model/task.js";
import { getUser } from "../../model/user.js";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const DeleteAll = async (req, res) => {
  // get jwt token from header
  const { jwt_token } = req.headers;
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
    }
    // add task to database
    const result = await deleteAll({ userId: id });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default DeleteAll;
