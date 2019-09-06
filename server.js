const express = require('express');
const router = require('./controllers/burgers_controller');

const burgerApp = express();
const PORT = process.env.PORT || 8080;

burgerApp.use('/', router);

burgerApp.listen(PORT, () => `Server running on port: ${PORT}`);
