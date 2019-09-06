const DB = require('./connection');

const checkForError = err => {
    if (err) {
        throw err;
    }
};

const readAllBurgers = callback => {
    DB.query('SELECT * FROM burgers', (err, data) => {
        checkForError(err);
        callback(data);
    });
};

const ORM = {
    // Select all burgers from the DB
    selectAll: callback => readAllBurgers(callback),
    // Insert new burger into the DB
    insertOne: (burgerName, callback) => {
        DB.query(
            `INSERT INTO burgers (burger_name) VALUES ('${burgerName}')`,
            err => {
                checkForError(err);

                // Get updated burger collection from DB
                readAllBurgers(callback);
            }
        );
    },
    // Update existing burger in the DB
    updateOne: (id, callback) => {
        DB.query(
            'UPDATE burgers SET ? WHERE ?',
            [{ devoured: true }, { id: id }],
            err => {
                checkForError(err);

                // Get updated burger collection from DB
                readAllBurgers(callback);
            }
        );
    },
    resetDb: callback => {
        DB.query('DELETE FROM burgers', err => {
            checkForError(err);

            // Refresh burger collection from DB
            readAllBurgers(callback);
        });
    }
};

module.exports = ORM;
