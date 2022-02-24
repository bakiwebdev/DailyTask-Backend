import bycrypt from "bcrypt"; // => to compare the password
import {getUser} from "../../model/user.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET_KEY;


const login = async (req, res) => {
    const { username, password } = req.body;

    if(!username || typeof username !== "string") {
        return res.status(400).send("Invalid username");
    }
    if(!password || typeof password !== "string") {
        return res.status(400).send("Invalid password");
    }
    if(password.length < 8) {
        return res.status(400).send("Password must be at least 8 characters long");
    }
    const user = await getUser({ username });

    if(!user) {
        return res.status(400).send("Invalid username or password");
    }
    if ( await bycrypt.compare(password, user.password) ) {  
        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "30d" });
        res.status(200).send(token);
    } 
}

export default login;