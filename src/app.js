const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const bodyParser = require("body-parser");
const https = require("https");
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
//routing
app.get("", function (req, res) {
  // res.send("welcome to home");
  res.render("index");
});
app.get("/about", function (req, res) {
  // res.send("Welcome to Crystal concept About Channel");
  res.render("about");
});
app.get("/weather", function (req, res) {
  res.render("weather");
});
app.get("*", function (req, res) {
  res.render("404error", {
    errormsg: "Oops! page not found",
  });
});

app.listen(port, function () {
  console.log("listening to the port at " + port);
});
