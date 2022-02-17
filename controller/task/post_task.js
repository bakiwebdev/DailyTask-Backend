import { InsertTask } from "../../utils/TaskDB.js";

const PostTask = async (req, res) => {
    const user_id = req.params.id;
    const { title, description, type, status } = req.body;
    if (!user_id) {
        res.status(400).send('User id is required');
        return;
    }
    if (!title) {
        res.status(400).send('Title is required');
        return;
    }
    if (!description) {
        res.status(400).send('Description is required');
        return;
    }
    if (!type) {
        res.status(400).send('Type is required');
        return;
    }
    if (!status) {
        res.status(400).send('Status is required');
        return;
    }
    try {
        const task = {
            title,
            description,
            type,
            status,
            userId: user_id
        }

        InsertTask(task);
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default PostTask;