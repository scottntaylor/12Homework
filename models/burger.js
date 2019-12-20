var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var burger = sequelize.define("burgers",{
    burger_name: sequelize.STRING,
    devoured: sequelize.BOOLEAN
});


burger.sync();

module.exports = Burger;