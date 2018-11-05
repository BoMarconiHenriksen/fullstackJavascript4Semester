const chai = require("chai");
const request = require("request")
const geoServer = require("./app");
const expect = chai.expect;
const PORT = 2345;
const URL = `http://localhost:${PORT}/geoapi/`;
let server;

// mocha
describe("Geo API Test", function () {
    before(function (done) {
        this.timeout(5000);
        geoServer(PORT, function (s) {
            server = s;
            done(); // Signaler at nu er vi færdige.
        })
    })
    after(function (done) {
        server.close();
        done();
    });

    // Virker ikke med arrow funktioner.
    describe('isuserinarea return true.', function() {
        it('Should return true', function(done) {
            const url = URL + "isuserinarea/12.555999755859375/55.779372753550554";
            request(url, function(err, res, data) { // returner ikke en promise.
                const d = JSON.parse(data);
                expect(d.status).to.be.equal(true);
                done();
            }) 
        })
    })

    describe('isuserinarea return true.', function() {
        this.timeout(5000);
        it('Should return true', function(done) {
            const url = URL + "isuserinarea/12.555999755859375/55.779372753550554";
            request(url, function(err, res, data) { // returner ikke en promise.
                const d = JSON.parse(data);
                expect(d.status).to.be.equal(true);
                done();
            }) 
        })
    });

    describe('isuserinarea return false.', function() {
        this.timeout(5000);
        it('Should return false', function(done) {
            const url = URL + "isuserinarea/12./55.";
            request(url, function(err, res, data) { // returner ikke en promise.
                const d = JSON.parse(data);
                expect(d.status).to.be.equal(false);
                done();
            }) 
        })
    });

});