const express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(express.static("app/public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})