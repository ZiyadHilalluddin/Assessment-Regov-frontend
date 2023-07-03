This assessment was given by GeGov company to fulfill the requirement before the interview
As the title of repositories, it was the front-end of the system. 

First of all, I would say sorry, to send the front-end and back-end repositories separately due to unintended technical issues. 

From the 1st requirement given, I use React JS to develop the frontend part which are Registration Interface, Sign-In Interface, and Profile Interface
For the 2nd requirement, I use Node JS to develop the backend part which is using API for login and register. 

I choose Node JS because I've never experienced using it. Before this, I only use Python as my backend. This is why I challenge myself to use something different. 
The same goes to React JS, It was my first time

There are some Validation and ErrorHandling login and register
The system is simple using the gradient color of card profile from mbd templates and applying it to other interfaces which is Login and Register: https://mdbootstrap.com/docs/standard/extended/profiles/

# Quick Start
Make sure to download both repositories
1. Assessment-Regov-frontend
2. Assessment-Regov-Backend : https://github.com/ZiyadHilalluddin/Assessment-ReGov-backend

there is another option which is to create directories:
open terminal

1. mkdir backend
2. cd backend
3. npm init -y
4. npm i mysql express cors nodemon
5. create file name 'server.js'
6. Add the following code below into the server.js file:

```
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require("express-validator");

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    port: "3307", //if your port is 3306, no need to add a port. you can just delete this line 
    host: "localhost",
    user: "root",
    password: "",
    database: "assessment_regov"
    
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/login', [
    check('email', "Email length error").isEmail().isLength({ min: 10, max: 30 }),
    check('password', "Password length 8-10").isLength({ min: 8, max: 10 })
  ], (req, res) => {
    const sql = "SELECT * FROM user WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ success: false, errors: errors.array() }); // Return validation errors
      } else {
        if (err) {
          return res.json({ success: false, message: "Error" });
        }
        if (data.length > 0) {
          const user = data[0]; // Assuming the query returns a single user row
          return res.json({ success: true, message: "Success", user: user }); // Return user data along with success response
        } else {
          return res.json({ success: false, message: "Failed" });
        }
      }
    });
  });
  
app.listen(8081, () => {
    console.log("Listening");
})
```
   
To test the system, you need to start a server for both the front-end and back-end. 

## File Structure
Within the download you'll find the following directories and files:

```
Assessment-Regov
└── backend
|  ├── package-lock.json
|  ├── package.json
|  └── server.js
└── frontend
   ├── node_modules
   ├── public
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── src
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      ├── Login.js
      ├── LoginValidation.js
      ├── logo.svg
      ├── Profile.css
      ├── Profile.js
      ├── reportWebVitals.js
      ├── setupTest.js
      ├── Signup.js
      └── SignupValidation.js
```

## Backend 
- cd backend 
- npm start
  
use nodemon tools
this starts the server that is connected to MYSQL, it is a good tool for Node.js automatically restarting the server whenever a file changes. 
It is particularly useful when working on server-side code that connects to a database because it eliminates the need to manually restart the server each time to make changes to the code. 

## Frontend 
- cd frontend
- npm start
- view localhost on: 'http://localhost:3000'

