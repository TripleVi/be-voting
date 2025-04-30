'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report.init({
    votes: DataTypes.INTEGER.UNSIGNED,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Report',
    createdAt: false,
    updatedAt: false,
    name: {
      singular: 'report',
      plural: 'reports'
    },
  });
  return Report;
};