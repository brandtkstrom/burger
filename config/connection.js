const mysql = require('mysql');

const localConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Password1',
    database: 'burgers_db'
};

const dbConfig = process.env.JAWSDB_URL || localConfig;

const DB = mysql.createConnection(dbConfig);

DB.connect(err => {
    if (err) throw err;
    console.log('Successfully connected to database.');
});

module.exports = DB;
