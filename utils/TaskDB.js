import fake_tasks from "./fake_task.js";

const tasks = fake_tasks;

export const GetTasks = () => {
    return tasks;
}

export const GetTasksByUserId = (id) => {
    const task = tasks.filter(task =>task.userId == id);
    return task;
}

export const InsertTask = (task) => {
    tasks.push(task);
}

export const UpdateTask = (task) => {
    const index = tasks.findIndex(t => t.id == task.id);
    tasks[index] = task;
}

export const DeleteTask = (id) => {
    const index = tasks.findIndex(t => t.id == id);
    tasks.splice(index, 1);
}


