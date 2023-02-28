const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ramani@7258',
    database: 'demo'
});

connection.connect((err) => {
    if (!err)
    console.log('db connection succeeded');
    else
    console.log('db connection failed');
    console.log(err)
});