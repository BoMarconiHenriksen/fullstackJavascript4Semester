var dateFormat = require("dateformat");
const express = require("express");
let app = express();
const PORT = 3000;

//Add your code here
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
var requestTime = function(req, res, next) {
  req.requestTime = dateFormat();
  req.allHeaders = JSON.stringify(req.headers);
  next();
};

var myLogger = function(req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(requestTime);
app.use(myLogger);

app.get("/", function(req, res) {
  let responseText = "Hello World!<br>";
  responseText +=
    "<small>Requested at: " + req.requestTime + "</small><br>" + req.allHeaders;
  res.send(responseText);
});

app.use(myLogger);

app.listen(PORT, () => {
  console.log(`Server started, listening on: ${PORT}`);
});
