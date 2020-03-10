var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Burger = sequelize.define("burgers", {
  name:
  { 
    type: Sequelize.STRING
  
  },
  orders: {
  type:  Sequelize.STRING,
  defaultValue: ""

  },
devoured:{
    type: Sequelize.BOOLEAN,
    defaultValue: false
}

});

// Syncs with DB
Burger.sync({force: true});
// Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;