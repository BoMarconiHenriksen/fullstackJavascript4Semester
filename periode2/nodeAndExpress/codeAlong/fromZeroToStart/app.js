var express = require("express");
var favicon = require("serve-favicon");
var path = require("path");
//var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var routes = require("./routes/index");

var app = express();

app.set("views", path.join(__dirname, "views")); //Actually the default view folder
app.set("view engine", "jade"); //allow us to leave out the extension

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(logger("dev"));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Blev udkommenteret da vi gik over til routes
/* app.get("/", function(req, res) {
  // res.send("hello world");
  res.render("index", { title: "Express" });
  throw new Error("UPPS");
}); */

app.use("/", routes); // Ny route: app.use("/produkter", routes);

// app.listen(3000);

app.post("/form", function(req, res) {
  names.push(req.body.name);
  //res.redirect("/form");
  res.render("form");
});

app.post("/names", function(req, res) {
  names.push(req.body); //We receive it as a JavaScript object
  console.log(JSON.stringify(req.body));
  res.redirect("/form");
});

var names = [];
app.get("/form", function(req, res) {
  res.send(
    "Hi: " + names.join(",") + "<form method='post'><input name='name'></form>"
  );
});

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err); //Make sure you understand this line
});

app.use(bodyParser.json());

// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    /* res.send(
      "<h1>Sorry there was a problem: " +
        err.message +
        "</h1><p>" +
        err.stack +
        "</p>"
    ); */
    res.render("error");
  });
}

//Will not print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  /* res.send(
    "<h1>Sorry there was a problem: " +
      err.message +
      "</h1><p>" +
      err.message +
      "</p>"
  ); */
  res.render("error");
});

module.exports = app;
