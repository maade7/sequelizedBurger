var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    path = require("path");

// var port = process.env.PORT || 3030;


var app = express();
app.set('port', (process.env.PORT || 8080));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// app.listen(port);
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
