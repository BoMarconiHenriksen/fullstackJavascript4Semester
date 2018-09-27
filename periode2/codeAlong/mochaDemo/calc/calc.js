const express = require("express");
const port = 3000;
const http = require("http"); // da app.close ikke findes.

// Server der automatisk kan startes op af tests.
function calcServer(port, isStartedCb) {
    const app = express();
    app.get("/calc/add/:n1/n2", (req, res) => { // route der sidder og lytter på noget som matcher det her.
        const n1 = Number(req.params.n1);
        const n2 = Number(req.params.n2);
        res.send(add(n1, n2).toString());
    });
    let server = http.createServer(app); // Laver det her pga at det er muligt at lukke efter testen.
    server.listen(port, () => {
        console.log('Server started...' + port);
        isStartedCb(server); // Kan bruge denne her i before og after i testen. I stedet for return.
    });

};

function add(n1, n2) {
    return n1 + n2;
};

module.exports = {
    // i es6 er det, det samme som: add : add  // Uden () betyder henvisning tilfunction add(n1, n2)
    add,
    calcServer // For at kunne bruge det udefra.
};