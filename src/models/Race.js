const { Model, DataTypes } = require('sequelize');

class Race extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Race;