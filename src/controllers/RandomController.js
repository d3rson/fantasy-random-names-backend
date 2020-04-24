const Names = require('../models/Names');

module.exports = {
  async index(req, res) {
    const randomName = await Names.findOne({order: 'random()', limit: 1, where: {raceId: '1', sexId: '1'}});
    return res.json(randomName)
  }
}