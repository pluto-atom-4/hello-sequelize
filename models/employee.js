'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female', 'other'),
    birth: DataTypes.DATE,
    joined_date: DataTypes.DATE
  }, {
    underscored: true,
  });
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};