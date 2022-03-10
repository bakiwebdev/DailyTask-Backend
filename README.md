# <img src="https://user-images.githubusercontent.com/57604289/155508952-574739e0-fb0d-4d9b-b5d7-2b1c8c37ef4b.png" width="50px" height="50px"> Daily Taks API


### ✨ Quick link

- [About Daily Task API](#about-daily-task)
- [Technology used](#technology-used)
- [Demo](#demo)

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

# REST API

Daily Task RESTapi example described below 

## Registration/Authentication ```/auth``` 
/auth/register
### Register Request

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

## ✨ Technology Used

- Node JS
- Express JS
- MongoDB

## ✨ Demo
you want to see live demo click [here](https://daily-task-api.herokuapp.com/)

### ✨ Note
⭐ if you like the project, please leave a star ⭐
