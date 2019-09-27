var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function(data) {
      let dbBurgers = {
        Burgers: data
      };
      res.render("index", dbBurgers);
      console.log(dbBurgers)
    })
      .catch(function (err) {
        throw(err)
      });
  });
  app.post("/api/Burgers", function (req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name
    }).then(function(data) {
      res.redirect("/");
    });
});
  
};
