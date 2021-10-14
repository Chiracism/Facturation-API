'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Client.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    extra_fac: DataTypes.FLOAT,
    commission: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};