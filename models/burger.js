var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var burger = sequelize.define("burgers",{
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});


burger.sync();

module.exports = burger;