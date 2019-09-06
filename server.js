const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./controllers/burgers_controller');

const burgerApp = express();
const PORT = process.env.PORT || 8080;

burgerApp.use(express.static('public'))
burgerApp.engine('handlebars', exphbs());
burgerApp.set('view engine', 'handlebars');
burgerApp.use('/', router);

burgerApp.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
