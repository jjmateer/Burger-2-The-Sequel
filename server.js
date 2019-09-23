var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
var exphbs = require('express-handlebars');
require("./controllers/burger_controller")(app);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
