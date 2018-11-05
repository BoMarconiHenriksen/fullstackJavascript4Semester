const express = require('express');
const app = express();
const http = require('http');
const gju = require('geojson-utils');
const gameArea = require('./gameData').gameArea;
const players = require('./gameData').playersInArea;
const geometry = require('./gameData').gameArea.geometry;
// https://github.com/maxogden/geojson-js-utils

app.get('/', (req, res) => {
    res.send('Geo Demo');
});

app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    const lon = req.params.lon;
    const lat = req.params.lat;

    const player = {"type": "Point", coordinates: [lon,lat]};

    const status = gju.pointInPolygon(player, gameArea);
    const msg = status ? "Point was inside the tested polygon" : "Point was NOT inside tested polygon"
    
    const result = {status, msg}; // es6: laver property med værdien fra status.
    res.json(result);
});

app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', (req, res) => {
    const lon = req.params.lon;
    const lat = req.params.lat;
    const rad = req.params.rad;

    const player = {"type": "Point", coordinates: [lon,lat]};
    
    const inside = gju.pointInPolygon(player, gameArea); // true.
    console.log(gameArea);
    console.log(gameArea.geometry);

    let result = [];
    players.forEach(player => {
        if(gju.geometryWithinRadius(gameArea, inside, rad)) {
            result.push(player);
        }
    });
    res.json(result);
});

/* {
    "status": true,
  "distance": 498.88825733403075,
  "to": "Peter"

  "msg": "User not found"
  Statuscode = 404

  } */

// Start og slukke server for test.
// Callbacken bruges til test.
// Server startes fra run.js. node run.js
function geoServer(port, cb) {
    
    // app.listen() Dog app har ikke en close metode. Derfor denne metode.
    // Skal kalde funktion for at starte up.
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log('Server started, listen on port' + port);
        if(cb) {
            cb(server);
        }
    });
    
}

module.exports = geoServer;

