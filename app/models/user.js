"use strict";

const Sequelize = require('sequelize')

/**
 * Created by alfred on June 8th 2016, 8:57:06 pm.
 */

var connection = require('../../db')

var User = connection.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  avatar: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

console.log(User)

User.sync({force: false});
 
module.exports = User;