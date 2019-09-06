const mysql = require('mysql');

const DB = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'turbo123',
    database: 'burgers_db'
});

module.exports = DB;
