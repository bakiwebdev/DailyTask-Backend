import express from "express";
import {
  getTasks,
  getTaskById,
  insertTask,
  updateTask,
  deleteTask,
} from "../controller/task.js";
const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", insertTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
