import { GetTasks } from "../../utils/TaskDB.js";

const GetAllTasks = (req, res) => {
    res.status(200).send(GetTasks());
}
export default GetAllTasks;