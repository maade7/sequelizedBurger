

var express = require("express");

var router = express.Router();
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
        var hbsObject = {
            burgers: dbBurger
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    db.Burger.create({
        name: req.body.name,
        devoured: req.body.devoured
    }).then(function() {
        // res.json(dbBurger);
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        // res.json(dbBurger);
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
