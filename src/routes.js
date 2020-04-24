const express = require('express');
const UserController = require('./controllers/UserController');
const RaceController = require('./controllers/RaceController');
const SexController = require('./controllers/SexController');
const NamesController = require('./controllers/NamesController');
const LastnamesController = require('./controllers/LastnamesController');

const routes = express.Router();

//POSTS
routes.post('/users', UserController.store);
routes.post('/race', RaceController.store);
routes.post('/sex', SexController.store);
routes.post('/name', NamesController.store);
routes.post('/lastname', LastnamesController.store);

//LISTS
routes.get('/users', UserController.index);
routes.get('/race', RaceController.index);
routes.get('/sex', SexController.index);
routes.get('/name', NamesController.index);
routes.get('/lastname', LastnamesController.index);

module.exports = routes; 