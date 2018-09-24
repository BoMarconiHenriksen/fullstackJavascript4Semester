const express = require("express");
let app = express();
const PORT = 3000;
//Add your code here

var myLogger = function(req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.use("/api/calculator/:operation/:n1/:n2", function(req, res, next) {
  var calculatorRequest = {
    operation: req.params.operation,
    n1: Number(req.params.n1),
    n2: Number(req.params.n2)
  };

  request.calculatorRequest;

  next();
});

app.get("/api/calculator/*", function(req, res) {});

app.listen(PORT, () => {
  console.log(`Server started, listening on: ${PORT}`);
});
