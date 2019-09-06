const express = require('express');
const orm = require('../config/orm')
const router = express.Router();

router.get('/', (req,res) => {

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

module.exports = router;
