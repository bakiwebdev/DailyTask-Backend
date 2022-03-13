# <img src="https://user-images.githubusercontent.com/57604289/155508952-574739e0-fb0d-4d9b-b5d7-2b1c8c37ef4b.png" width="50px" height="50px"> Daily Taks API

### ✨ Quick link

- [About Daily Task API](#-about-daily-task)
- [RESTapi examples](#-rest-api)
- [Technology used](#-technology-used)
- [Demo](#-demo)

<!-- - [Vision](#vision)
- [Version](#version) -->

## ✨ About Daily Task

Daily task API provides a gateway to store user tasks and allows users to do CRUD functionality.<br>

### ✨ Application Features <br>
- Allow users to create an account.
- Login user based on credentials.
- Store task.
- Provide a list of tasks to the right user.
- Delete task.


[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-blue)](#-daily-taks-api)

## ✨ Install

```
npm install
```
## ✨ Run the app
```
npm start
```

## ✨ Run the app on dev environment (recomanded)
```
npm run start:dev
```
## ✨ Postman request collection

https://www.getpostman.com/collections/dd23329f56c416aba3fc

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-blue)](#-daily-taks-api)

# ✨ REST API

Daily Task RESTapi example described below 

## ✨ Registration/Authentication ```/auth``` 

### ✨ Register Request

```POST /auth/register ```
```
curl -i -H 'Accept: application/json' http://localhost:5000/auth/register
```
body
```
{
    "fullname": "Biruk Endris",
    "username": "for_the_sake_of_username",
    "password": "for_the_sake_of_password"
}
```
### Register Response
```
HTTP/1.1 200 OK
Date: Thu, 24 Feb 2011 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
[
  {
    "acknowledged": true,
    "insertedId": "622a0c5688579a35c69aebe3"
  }
]
```

### ✨ Login Request

```POST /auth/login ```
```
curl -i -H 'Accept: application/json' http://localhost:5000/auth/login
```
body
```
{
    "username": "for_the_sake_of_username",
    "password": "for_the_sake_of_password"
}
```
### Register Response
```
HTTP/1.1 200 OK
Date: Thu, 24 Feb 2011 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
[
  {
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    ODg1NzlhMzVjNjlhZWJlMyIsInVzZXJuYW1lIjoiZm9yX3RoZV9zYWtlX29mX3VzZXJuYW1lIiwk1MTUxNDZ9.
    GbGM5qNLDDHLqCjdWU",
    "user": {
        "id": "622a0c5688579a35c69aebe3",
        "fullname": "Biruk Endris"
        }
  }
]
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-blue)](#-daily-taks-api)

## ✨ Task  ```/task``` 

### ✨ Get Task Request

```POST /auth/register ```
```
curl -i -H 'Accept: application/json' http://localhost:5000/task
```
header
```
"jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    ODg1NzlhMzVjNjlhZWJlMyIsInVzZXJuYW1lIjoiZm9yX3RoZV9zYWtlX29mX3VzZXJuYW1lIiwk1MTUxNDZ9.
    GbGM5qNLDDHLqCjdWU"
```
### Get Task Response
```
HTTP/1.1 200 OK
Date: Thu, 24 Feb 2011 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
[
    {
        "_id": "622a0ecac1e9227e0b798bf1",
        "title": "title from postman",
        "description": "description from postman",
        "dateTime": {
            "date": "10-03-2022",
            "time": "14:44:26"
        },
        "isCompleted": false,
        "userId": "622a0c5688579a35c69aebe3"
    }
]
```
### ✨ Create Task Request

```POST /auth/register ```
```
curl -i -H 'Accept: application/json' http://localhost:5000/task/
```
header
```
"jwt_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    ODg1NzlhMzVjNjlhZWJlMyIsInVzZXJuYW1lIjoiZm9yX3RoZV9zYWtlX29mX3VzZXJuYW1lIiwk1MTUxNDZ9.
    GbGM5qNLDDHLqCjdWU"
```
body
```
{
    "task": {
        "title": "task title",
        "description": "description",
    }
}
```
### Create Task Response
```
HTTP/1.1 201 OK
Date: Thu, 24 Feb 2011 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
[
    {
    "message": "Task added",
    "result": {
        "acknowledged": true,
        "insertedId": "622a0ecac1e9227e0b798bf1"
        }
    }
]
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-blue)](#-daily-taks-api)

## ✨ Technology Used

- Node JS
- Express JS
- MongoDB

## ✨ Demo
you want to see live demo click [here](https://daily-task-api.herokuapp.com/)

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-blue)](#-daily-taks-api)

### 💝 Supporting me
⭐ if you like the project, please leave a star ⭐

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-blue)](#-daily-taks-api)
