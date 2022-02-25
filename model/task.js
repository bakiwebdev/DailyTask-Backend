import { MongoClient, ObjectId } from "mongodb";

// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const dbName = "daily_task";
const collectionName = "tasks";

export const getAll = async ({userId}) => {
    await client.connect();
    const db = client.db(dbName);
    const tasks = await db.collection(collectionName).find({ userId }).toArray();
    client.close();
    return tasks;
}

export const getByID = async ({ id }) => {
    console.log(id);
    await client.connect();
    const db = client.db(dbName);
    const task = await db.collection(collectionName).findOne({_id : ObjectId(id)});
    console.log(task)
    client.close();
    return task;
}

export const addTask = async ({ title, description, priority, status, userId }) => {
    await client.connect();
    const db = client.db(dbName);
    // check if user already exists
    try{ 
    const result = await db
        .collection(collectionName)
        .insertOne({ title, description, priority, status, userId });
    return result;  
    } catch(err){   
        throw new Error(err.message);       
    }           
};

export const updateTask = async ( id, task) => {
    await client.connect();
    const db = client.db(dbName);
    const result = await db
        .collection(collectionName)
        .updateOne({_id : ObjectId(id)}, { $set: task });
    client.close();
    return result;
};

export const deleteByID = async ({ id }) => {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).deleteOne({_id : ObjectId(id)});
    client.close();
    return result;
}

export const deleteAll = async ({ userId }) => {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).deleteMany({ userId });
    client.close();
    return result;
}