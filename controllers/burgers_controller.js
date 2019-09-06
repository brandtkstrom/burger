const express = require('express');
const orm = require('../config/orm')
const router = express.Router();

router.get('/', (req, res) => {

    // Callback used to render burgers
    const renderBurgers = (err, data) => {
        if (err) {
            throw err;
        }

        console.log(data);

        const uneaten = data.filter(b => !b.devoured);
        const devoured = data.filter(b => b.devoured);

        res.render('index', { uneaten, devoured });
    }

    // Find all burgers in the DB
    orm.selectAll(renderBurgers);
});

router.post('/:burger', (req, res) => {
    if (!req.params.burger) {
        res.status(422).send('Missing burger name.');
    }

    orm.insertOne(req.params.burger);
});

module.exports = router;
