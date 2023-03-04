// require("dotenv").config();
// const express = require("express");
// import rootRoute from '@routes/index';
// const app = express();

// app.get("/api", (req, res) => {
//     res.json({
//         message: "api is working"})
// })

// app.listen(process.env.APP_PORT || 3000, () => {
//     console.log("server is running on port:", process.env.APP_PORT)
// })

// //Routes
// app.use(rootRoute);

// const mysql = require('mysql');
// const express = require('express');
// const app = express();
// const rootRoute = require('./routes/index.ts');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json({type: 'application/json'}));
// app.use(bodyParser.urlencoded({extended: true}));

// //routes
// app.use(rootRoute);

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Ramani@7258',
//     database: 'demo'
// });

// const server = app.listen(process.env.APP_PORT || 3000, function() {
//     const host = server.address().address;
//     const port = server.address().port;
// })

// export default server

// connection.connect((err) => {
//     if (!err)
//     console.log('db connection succeeded');
//     else
//     console.log('db connection failed');
//     console.log(err)
// });


import express from 'express';
import bodyParser from "body-parser";
import rootRoute from './routes/index';

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to designmycodes application." });
});

//routes
app.use(rootRoute);

// set port, listen for requests
app.listen(process.env.APP_PORT || 3000, () => {
  console.log("Server is running on port:", process.env.APP_PORT || 3000);
});

export default app;