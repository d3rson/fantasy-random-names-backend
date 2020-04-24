const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Users = require('../models/User');
const Race = require('../models/Race');
const Sex = require('../models/Sex');
const Names = require('../models/Names');
const Lastnames = require('../models/Lastnames');

Users.init(connection);
Race.init(connection);
Sex.init(connection);
Names.init(connection);
Lastnames.init(connection);

module.exports = connection;