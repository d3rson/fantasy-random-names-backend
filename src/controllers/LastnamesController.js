const Lastnames = require('../models/Lastnames');

module.exports = {

  async index(req, res){
    const lastnames = await Lastnames.findAll();
    return res.json(lastnames);
  },
  
  async store(req, res) {
    const {name, raceId, sexId} = req.body;
    const lastnames = await Lastnames.create({ name, raceId, sexId});
    return res.json(lastnames);
  }
}