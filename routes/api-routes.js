// var Burger = require("../models/burger");

// module.exports = function (app){
//     app.get("/api/all", function (req, res){
//         Burger.burger.findAll({}).then(function(results){
//             res.json(results);
//         })
//     });

//     app.post("/api/new", function(req, res){
//         Burger.burger.create({
//             burger_name: req.body.burger_name,
//             devoured: false
//         }).then(function (results){
//             res.json(results);
//         })
//     });

//     app.delete("/api/burger/:id", function(req, res){
//         Burger.burger.destroy({
//             where: {
//                 burger_name: req.params.burger_name
//             }
//         }).then(function (results){
//             res.json(results);
//         });
//     })
// }

var Burger = require("../models/burger.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function (req, res) {
    Burger.findAll({
      attributes:["name", "orders"]
    }).then(function (results) {
      res.json(results);
    })

  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:burger", function (req, res) {
    Burger.findAll({
      
    }).then(function (results) {
      res.json(results);
      console.log("The burger you ordered is: " + res);
    });
  });

 
  app.post("/api/new", function (req, res) {
    Burger.create(req.body).then(function (results) {
        res.json(results)

    });

  });

  // Add sequelize code to delete a book
  app.put("/api/burgers/:id", function (req, res) {
    Burger.updateOne({devoured: true},{
      where: {
        id: req.params.id
      },

          

      
    }).then(() => {
      res.sendStatus(200);
    })
  })


};