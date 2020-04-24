const { Model, DataTypes, Sequelize } = require('sequelize');

class Lastnames extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      raceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Race',
          key: 'id',
          as: 'raceId',
        }
      },
      sexId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sex',
          key: 'id',
          as: 'sexId',
        }
      }
    }, {
      sequelize,
      modelName: 'lastnames'
    })
  }
}

module.exports = Lastnames;