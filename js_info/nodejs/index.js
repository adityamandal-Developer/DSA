// const http = require('http');
// const fs = require('fs');

// const PORT = 4000

// const server = http.createServer((req, res) => {
//     const log = `${Date.now().toLocaleString()}: ${req.url}\n`;
//     fs.appendFile('log.txt', log, (err, data) => {
//         console.log('new request');
//         res.end("Hello World");
//     })
// })

// server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

import express from 'express';
const app = express()
app.get("/", (req, res) => {
    res.send('hello')
});

app.listen(3000, () => console.log("running on port 3000"))



//middleware
// const jwt = require("jsonwebtoken");

// const { UserService } = require("../services/user.service");

// const Logger = require("../helpers/logger.helpers");
// const HttpError = require("../helpers/httpError.helpers");

// const { JWT_SECRET } = process.env;

// const Auth = async (req, res, next) => {
//   try {
//     const authorizationHeader = req.headers['authorization'];
//     if (!authorizationHeader) {
//       throw new HttpError(401, "Unauthorized: Missing Token");
//     }

//     const token = authorizationHeader.split(" ")[1];
//     if (!token) {
//       throw new HttpError(401, "Unauthorized: Missing Token");
//     }

//     const decoded = jwt.verify(token, JWT_SECRET);
//     const user = await UserService.findById(decoded._id);

//     if (!user || !decoded._id === user._id) {
//       throw new HttpError(401, "Unauthorized: Invalid Token");
//     }

//     req.user = user;

//     Logger.info(`User authenticated: ${user}`);
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = { Auth };