'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    joined_date: DataTypes.DATEONLY
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};