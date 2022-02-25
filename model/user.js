import { MongoClient } from "mongodb";

// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const dbName = "daily_task";
const collectionName = "users";

export const addUser = async ({ fullname, username, password }) => {
  await client.connect();
  const db = client.db(dbName);
  // check if user already exists
  const user = await db.collection(collectionName).findOne({ username });
  if (user) {
    throw new Error("User already exists");
  }
  const result = await db
    .collection("users")
    .insertOne({ fullname, username, password });
    client.close();
  return result;
};

export const getUser = async ({ username }) => {
  await client.connect();
  const db = client.db(dbName);
  const user = await db.collection(collectionName).findOne({ username });
  client.close();
  return user;
};

export const getByID = async ({ id }) => {
  await client.connect();
  const db = client.db(dbName);
  const user = await db.collection(collectionName).findOne({ _id: id });
  client.close();
  return user;
};

export const updatePassword = async ({ username, password }) => {
  await client.connect();
  // console.log(`From updatePassword db: ${id} ${password}`);
  const db = client.db(dbName);
  const result = await db
    .collection(collectionName)
    .updateOne({ username }, { $set: { password } });
    console.log(result);
  client.close();
  return result;
};
