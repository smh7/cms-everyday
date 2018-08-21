'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
 
    Author.associate = models => {
      Author.hasMany(models.Posts);
  };
  return Author;
};