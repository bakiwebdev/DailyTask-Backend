import bycrypt from "bcrypt"; // => to hash the password
import { addUser } from "../../model/user.js";

const register = async (req, res) => {
  const { fullname, username, password: plainTextPassword } = req.body;

  if (!fullname || typeof fullname !== "string") {
    return res.status(400).send("Invalid fullname");
  }
  if(fullname.length < 3) {
    return res.status(400).send("Fullname must be at least 3 characters long");
  }
  if (!username || typeof username !== "string") {
    return res.status(400).send("Invalid username");
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.status(400).send("Invalid password");
  }
  if (plainTextPassword.length < 8) {
    return res.status(400).send("Password must be at least 8 characters long");
  }
  const password = await bycrypt.hash(plainTextPassword, 10);

  try {
    const user = await addUser({ fullname, username, password });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default register;
