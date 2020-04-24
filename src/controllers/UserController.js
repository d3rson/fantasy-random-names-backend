const Users = require('../models/User');

module.exports = {

  async index(req, res){
    const users = await Users.findAll();
    return res.json(users);
  },
  
  async store(req, res) {
    const {name, email, password} = req.body;
    const users = await Users.create({ name, email, password});
    return res.json(users);
  }
}