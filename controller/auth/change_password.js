import bycrypt from "bcrypt"; // => to compare the password
import { getUser, updatePassword } from "../../model/user.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const change_password = async (req, res) => {
  const { jwt_token } = req.headers;
  if (!jwt_token || typeof jwt_token !== "string") {
    return res.status(400).send("Invalid token");
  }
  try {
    const decoded = jwt.verify(jwt_token, JWT_SECRET);
    const { id, username } = decoded;
    const plainTextPassword = req.body.password;
    console.log(`from changePassword controller => id: ${id} username: ${username} password: ${plainTextPassword}`);
    if (!plainTextPassword || typeof plainTextPassword !== "string") {
        return res.status(400).send("Invalid password");
        }
    if (plainTextPassword.length < 8) {
        return res.status(400).send("Password must be at least 8 characters long");
    }
    const user = await getUser({ username });
    if (!user) {
        return res.status(400).send("Invalid username or password");
    }
    // update password
    const password = await bycrypt.hash(plainTextPassword, 10);
    await updatePassword({ username, password });
    // generate new token
    const token = jwt.sign({ id, username }, JWT_SECRET, { expiresIn: "30d" });
    res.status(200).send(token);
  } catch (err) {
    return res.status(400).send("Invalid token");
  }
};

export default change_password;
