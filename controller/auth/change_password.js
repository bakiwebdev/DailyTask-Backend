import bycrypt from "bcrypt"; // => to compare the password
import { getUser, updatePassword } from "../../model/user.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const change_password = async (req, res) => {
  const { jwt_token } = req.body;
  if (!jwt_token || typeof jwt_token !== "string") {
    return res.status(400).send("Invalid token");
  }
  try {
    const decoded = jwt.verify(jwt_token, JWT_SECRET);
    const { id, username } = decoded;
    const { password } = req.body;
    if (!password || typeof password !== "string") {
        return res.status(400).send("Invalid password");
        }
    if (password.length < 8) {
        return res.status(400).send("Password must be at least 8 characters long");
    }
    const user = await getUser({ username });
    if (!user) {
        return res.status(400).send("Invalid username or password");
    }
    // update password
    const result = await updatePassword({ id, password });
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    return res.status(400).send("Invalid token");
  }
};

export default change_password;
