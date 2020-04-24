const express = require('express');
const UserController = require('./controllers/UserController');
const RaceController = require('./controllers/RaceController');
const SexController = require('./controllers/SexController');
const NamesController = require('./controllers/NamesController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/race', RaceController.store);
routes.post('/sex', SexController.store);
routes.post('/name', NamesController.store);

routes.get('/users', UserController.index);
routes.get('/race', RaceController.index);
routes.get('/sex', SexController.index);

module.exports = routes; 