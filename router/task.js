import express from "express";
import AddTask from "../controller/task/add.js";
import DeleteAll from "../controller/task/delete_all.js";
import DeleteByID from "../controller/task/delete_by_id.js";
import GetAll from "../controller/task/get_all.js";
import GetByID from "../controller/task/get_by_id.js";
import UpdateTask from "../controller/task/update.js";

const route = express.Router();

route.get("/", GetAll);
route.get("/:id", GetByID);
route.post("/", AddTask);
route.put("/:id", UpdateTask);
route.patch("/:id", UpdateTask);
route.delete("/", DeleteAll);
route.delete("/:id", DeleteByID);

export default route;
