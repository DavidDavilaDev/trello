const express = require('express');
const boardController = require('../Controllers/boardController');
const route = express.Router();

route.post('/create', boardController.create);
route.get('/:id', boardController.getById);
route.get('/', boardController.getAll);

module.exports = route;
