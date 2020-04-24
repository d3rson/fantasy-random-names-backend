const Sex = require('../models/Sex');

module.exports = {
  async index(req, res){
    const sexes = await Sex.findAll();
    return res.json(sexes);
  },

  async store(req, res) {
    const {name} = req.body;

    const sex = await Sex.create({name});

    return res.json(sex);
  }
}