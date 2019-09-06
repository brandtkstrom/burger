const express = require('express');
var exphbs = require('express-handlebars');
const router = require('./controllers/burgers_controller');

const burgerApp = express();
const PORT = process.env.PORT || 8080;

burgerApp.engine('handlebars', exphbs());
burgerApp.set('view engine', 'handlebars');
burgerApp.use('/', router);

burgerApp.listen(PORT, () => `Server running on port: ${PORT}`);
