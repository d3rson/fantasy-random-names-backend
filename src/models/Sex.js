const { Model, DataTypes } = require('sequelize');

class Sex extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Sex;