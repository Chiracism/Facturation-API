"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Container.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acronym: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Container",
    }
  );
  return Container;
};
