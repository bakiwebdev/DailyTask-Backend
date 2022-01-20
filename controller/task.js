import { createTaskTable, populateTaskTable, deleteTaskTable, GET_TASKS } from "../model/taskDB.js";

// run the
deleteTaskTable();
createTaskTable();
populateTaskTable();

export const getTasks = (req, res) => {
    GET_TASKS()
    res.send("ok");
};

export const getTaskById = (req, res) => {
  res.send("Hello from taskRouter Get method with id: " + req.params.id);
};

export const insertTask = (req, res) => {
  res.send("Hello from taskRouter Post method");
};

export const updateTask = (req, res) => {
  res.send("Hello from taskRouter Put method with id: " + req.params.id);
};

export const deleteTask = (req, res) => {
  res.send("Hello from taskRouter Delete method with id: " + req.params.id);
};
