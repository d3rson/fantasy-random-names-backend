const Race = require('../models/Race');

module.exports = {
  async index(req, res){
    const races = await Race.findAll();
    return res.json(races);
  },

  async store(req, res) {
    const {name} = req.body;

    const race = await Race.create({name});

    return res.json(race);
  }
}