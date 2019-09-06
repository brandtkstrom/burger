const DB = require('./connection');

const checkForError = err => {
    if (err) {
        throw err;
    }
};

const ORM = {
    selectAll: () => {
        // TODO - DB select all
        DB.query('SELECT * FROM burgers', (err, data) => {
            checkForError(err);
            return data;
        });
    },
    insertOne: () => {
        // TODO - DB insert one
    },
    updateOne: () => {
        // TODO DB update one
    }
};

module.exports = ORM;
