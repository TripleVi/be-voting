'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HourlyReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HourlyReport.belongsTo(models.User)
    }
  }
  HourlyReport.init({
    votes: DataTypes.INTEGER.UNSIGNED,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HourlyReport',
    createdAt: false,
    updatedAt: false,
    name: {
      singular: 'hourlyReport',
      plural: 'hourlyReports'
    },
  });
  return HourlyReport;
};