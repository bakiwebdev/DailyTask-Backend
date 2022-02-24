import express from "express";
import login from "../controller/auth/login.js";
import register from "../controller/auth/register.js";
import change_password from "../controller/auth/change_password.js";

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.post('/change-password', change_password);

export default route;