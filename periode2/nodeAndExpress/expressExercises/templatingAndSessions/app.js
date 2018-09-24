var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cookieSession = require('cookie-session')

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api"); // Til rest
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cookieSession({
  name: 'session',
  keys: ["I_should_never_be_visible_in_code"],

  // Cookie Options
  maxAge: 30 * 60 * 1000 //24 * 60 * 60 * 1000 // 24 hours timer * minutter * sekunder * milisekunder
}))

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* app.use(function (req, res, next) {
  if (req.method === 'POST' && req.body.userName !== 'undefined') {
    let userName = req.body.userName;
    req.session.userName = userName; // Sætter userName på session
    // Change POST to GET so the request will be handled by the get-handlers(index) when logged in.
    req.method = 'GET';
    next();
  }
});

app.use(function (req, res, next) {
  if (req.session.userName !== 'undefined') {
    next();
  } else {
    req.url = '/login';
    return next();
  }
}) */

// app.use("/", indexRouter);
/* app.use("/users", indexRouter);
app.use("/random_joke", indexRouter); // Når der kommer et request ind, der har /random_joke send det til den route, der hedder joke.
app.use("/all_jokes", indexRouter);
app.use("/add_joke", indexRouter);
app.use("/store_joke", indexRouter);
app.use("/login", indexRouter); */
app.use("/", apiRouter);
app.use("/api", apiRouter); // Til rest
app.use("/api/random_joke", apiRouter); // Når der kommer et request ind, der har /random_joke send det til den route, der hedder joke.
app.use("/all_jokes", apiRouter);
app.use("/add_joke", apiRouter);
app.use("/store_joke", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;