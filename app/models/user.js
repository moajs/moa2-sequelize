"use strict";

const Sequelize = require('sequelize')
/**
 * Created by alfred on June 8th 2016, 8:57:06 pm.
 */


var connection = require('../../db')

var User = connection.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

console.log(User)
 
module.exports = User;