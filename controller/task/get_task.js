/**
 * 
 * Tasks to be done:
 * 1) Check if the user id is present in the request => completed
 * 2) Check if the id is valid
 * 3) Check if any query params are present Type: string & Status: string => completed
 * 4) if type and status are not present send all user tasks
 * 5) if type is present send all user tasks with the type
 * 6) if status is present send all user tasks with the status
 * 7) if type and status are present send all user tasks with the type and status
 * 
 */
import fake_task from "../../utils/fake_task.js";

const UserTask = (id) => {
    console.log(`Id dataType is: ${typeof id} and task userId datatype : ${typeof fake_task[0].userId}`);
    const user_tasks = fake_task.filter(task =>task.userId == id);
    return user_tasks;
}

const UserTaskByType = (id, type) => {
    const user_tasks = fake_task.filter(task =>task.userId == id && task.type == type);
    return user_tasks;
}

const UserTaskByStatus = (id, status) => {
    const user_tasks = fake_task.filter(task =>task.userId == id && task.status == status);
    return user_tasks;
}

const UserTaskByTypeAndStatus = (id, type, status) => {
    const user_tasks = fake_task.filter(task =>task.userId == id && task.type == type && task.status == status);
    return user_tasks;
}

const GetTask = async (req, res) => {
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

export default GetTask;