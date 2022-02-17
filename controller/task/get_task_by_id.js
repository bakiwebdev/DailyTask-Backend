import { GetTasksByUserId } from "../../utils/TaskDB.js";

// return all the tasks of the user
const UserTask = (id) => {
    const user_tasks = GetTasksByUserId(id);
    return user_tasks;
}
// Return the task with the given id and type
const UserTaskByType = (id, type) => {
    const user_tasks = GetTasksByUserId(id).filter(task =>task.type == type);
    return user_tasks;
}
// Return the tasks with the given id and status
const UserTaskByStatus = (id, status) => {
    const user_tasks = GetTasksByUserId(id).filter(task =>task.status == status);
    return user_tasks;
}
// Return the task with the given id, type, and status
const UserTaskByTypeAndStatus = (id, type, status) => {
    const user_tasks = GetTasksByUserId(id).filter(task =>task.type == type && task.status == status);
    return user_tasks;
}

const GetTaskById = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.status(400).send('Id is not present in the request');
    }
    const {type, status} = req.query;
    if(!type && !status) {
        // if type and status are not present return all the tasks for the user
        res.status(200).send(UserTask(id));
    }
    if(type && status) {
        // if type and status are present return all the tasks for the user with the given type and status
        res.status(200).send(UserTaskByTypeAndStatus(id, type, status));
    }
    if(type){
        // if type is present return all the tasks of the user with the type
        res.status(200).send(UserTaskByType(id, type));
    }
    if(status){
        // if status is present return all the tasks of the user with the status
        res.status(200).send(UserTaskByStatus(id, status));
    }
}

export default GetTaskById;