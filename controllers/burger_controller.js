var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function (data) {
      let dbBurgers = {
        Burgers: data
      };
      res.render("index", dbBurgers);
      // console.log(dbBurgers)
    })
      .catch(function (err) {
        throw (err)
      });
  });
  app.post("/api/burgers", function (req, res) {
    db.Burgers.create({
      id: req.body.id
    }).then(function (data) {
      console.log(data)
      res.redirect("/");
    });
  });

  app.put("api/burgers", function (req, res) {
    db.Burgers.update({
      where: { devoured: req.body.devoured }
    }).then(function (cb) {
      console.log(req.body.devoured)
      console.log(cb)
    })
  })
};
