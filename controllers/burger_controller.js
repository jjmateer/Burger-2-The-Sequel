var db = require("../models");

module.exports = function (app) {


  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function(dbBurgers) {
      let hbsObject = {
        burgers: dbBurgers
      };
      res.render("index", hbsObject);
    })
      .catch(function (err) {
        res.json({ status: "ERROR", message: err });
      });
  });
  app.post("/api/burgers", function (req, res) {
    db.Burgers.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  app.put("/api/burgers", function (req, res) {

  });
};
