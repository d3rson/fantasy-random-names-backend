const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Race = require('../models/Race');
const Sex = require('../models/Sex');

const connection = new Sequelize(dbConfig);

User.init(connection);
Race.init(connection);
Sex.init(connection);

module.exports = connection;