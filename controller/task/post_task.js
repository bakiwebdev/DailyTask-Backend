/**
 * 1) Check if the user id is present in the request 
 * 2) Check if the id is valid
 * 3) Check if request body is present
 * 4) Check if the request body is valid : check for title, description, type, status
 */
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
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default PostTask;