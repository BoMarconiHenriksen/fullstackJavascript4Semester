const express = require("express");
const app = express();
const PORT = 3000;

// Eksempel på middleware
// Funktionen skal laves før app.get...
app.use((req, res, next) => {
  console.log(JSON.stringify(req.headers));
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hello2", (req, res) => res.send("Hello Hello!"));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
