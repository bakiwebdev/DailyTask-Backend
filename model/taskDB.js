// import sql module
import mysql from "mysql";

// constants
const host = "localhost";
const user = "hyfuser";
const password = "hyfpassword";
const database = "daily_task";

// start connection
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

// task to add in database
const sampleTask = [
  {
    title: "Task 1",
    description: "Task 1 description",
    status: "todo",
    user_id: 1,
  },
  {
    title: "Task 2",
    description: "Task 2 description",
    status: "in-progress",
    user_id: 1,
  },
  {
    title: "Task 3",
    description: "Task 3 description",
    status: "done",
    user_id: 1,
  },
];

// delete task database table
export const deleteTaskTable = () => {
  const sql = `DROP TABLE IF EXISTS task`;
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Table task deleted");
  });
};
// create task database table
export const createTaskTable = () => {
  const sql = `
        CREATE TABLE IF NOT EXISTS task (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255),
            status ENUM('todo', 'in-progress', 'done') NOT NULL DEFAULT 'todo',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_id INT NOT NULL
        )
    `;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
};

// populate sample data
export const populateTaskTable = () => {
  const sql = `
        INSERT INTO task SET ?
    `;
  sampleTask.forEach((task) => {
    connection.query(sql, task, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
};

export const GET_TASKS = () => {
  const sql = `SELECT * FROM task`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    result.forEach((task) => {
      console.log(task)
    });
  });
};

