var db = require("../models");

module.exports = function (app) {


  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function (dbBurgers) {
      let hbsObject = {
        burgers: dbBurgers
      };
      res.render("index", hbsObject);
    });
  });
  app.post("/api/burgers", function (req, res) {

  });

  app.delete("/api/burgers/:id", function (req, res) {

  });

  app.put("/api/burgers", function (req, res) {

  });
};
