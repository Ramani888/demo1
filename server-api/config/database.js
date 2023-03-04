// const { createPool } = require('mysql');

// const pool = createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     connectionLimit: 10
// })

// const connection = pool.createConnection();

// const getPoolConnection = connection.connect((err) => {
//     if (!err)
//     console.log('db connection succeeded');
//     else
//     console.log('db connection failed');
//     console.log(err)
// });

// module.exports = getPoolConnection;

const mysql = require("mysql");

// Create a connection to the database
const getPoolConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

// open the MySQL connection
getPoolConnection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default getPoolConnection;