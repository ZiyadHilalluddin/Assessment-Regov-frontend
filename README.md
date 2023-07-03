This assessment was given by GeGov company to fulfill the requirement before the interview
As the title of repositories, it was the front-end of the system. 

First of all, I would say sorry, to send the front-end and back-end repositories separately due to unintended technical issues

From the 1st requirement given, I use React JS to develop the frontend part which are Registration Interface, Sign-In Interface, and Profile Interface

The system is simple using the gradient color of card profile from mbd templates and applying it to other interfaces which is Login and Register: https://mdbootstrap.com/docs/standard/extended/profiles/

# Quick Start
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

