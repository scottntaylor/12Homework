var Burger = require("..models/burger.js");

module.exports = function (app){
    app.get("/api/all", function (req, res){
        Burger.burger.findAll({}).then(function(results){
            res.json(results);
        })
    });

    app.post("/api/new", function(req, res){
        Burger.burger.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function (results){
            res.json(results);
        })
    });

    app.delete("/api/burger/:id", function(req, res){
        Burger.burger.destroy({
            where: {
                burger_name: req.params.burger_name
            }
        }).then(function (results){
            res.json(results);
        });
    })
}