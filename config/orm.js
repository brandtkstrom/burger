const DB = require('./connection');

const checkForError = err => {
    if (err) {
        throw err;
    }
};

const ORM = {
    // Select all burgers from the DB
    selectAll: (callback) => {
        return DB.query('SELECT * FROM burgers', callback);
    },
    // Insert new burger into the DB
    insertOne: burgerName => {
        // TODO - DB insert one
        DB.query(
            'INSERT INTO burgers (burger_name) VALUES ?',
            burgerName,
            err => {
                checkForError(err);
            }
        );
    },
    // Update existing burger in the DB
    updateOne: () => {
        // TODO DB update one
    }
};

module.exports = ORM;
