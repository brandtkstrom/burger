const express = require('express');
const orm = require('../config/orm');
const router = express.Router();

// Callback used to organize and render burgers
const renderBurgers = (res, data) => {
    const uneaten = data.filter(b => !b.devoured);
    const devoured = data.filter(b => b.devoured);

    res.render('index', { uneaten, devoured });
};

router.get('/', (req, res) => {
    // Find all burgers in the DB
    orm.selectAll(data => renderBurgers(res, data));
});

router.post('/burgers/:burger', (req, res) => {
    if (!req.params.burger) {
        res.status(422).send('Missing burger name.');
    }

    orm.insertOne(req.params.burger, data => renderBurgers(res, data));
});

router.put('/burgers/:id', (req, res) => {
    if (!req.params.id) {
        res.status(422).send('Missing burger id.');
    }

    const burgerId = parseInt(req.params.id);

    orm.updateOne(burgerId, data => renderBurgers(res, data));
});

router.delete('/burgers', (req, res) => {
    orm.resetDb(data => renderBurgers(res, data));
});

module.exports = router;
