const Names = require('../models/Names');

module.exports = {

  async index(req, res){
    const names = await Names.findAll();
    return res.json(names);
  },
  
  async store(req, res) {
    const {name, raceId, sexId} = req.body;
    const names = await Names.create({ name, raceId, sexId});
    return res.json(names);
  }
}