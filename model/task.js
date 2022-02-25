import { MongoClient } from "mongodb";
import { getByID } from "./user.js";

// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const dbName = "daily_task";
const collectionName = "tasks";

export const addTask = async ({ title, description, priority, status, userId }) => {
    await client.connect();
    const db = client.db(dbName);
    // check if user already exists
    try{
    const user = await getByID({ id: userId });
    if (!user) {
        throw new Error("User not found");
    }   
    const result = await db
        .collection(collectionName)
        .insertOne({ title, description, priority, status, userId });
    return result;  
    } catch(err){   
        throw new Error(err.message);       
    }           
};