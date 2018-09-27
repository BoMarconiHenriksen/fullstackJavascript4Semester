const chai = require("chai");
const calc = require("../calc/calc");
const expect = chai.expect;
let server = null;
const request = require("request");
const PORT = 3000;
const URL = "localhost:" + PORT + "/calc/add/";


describe("Calculator Test", function () {
    describe("Calculator API", function () {
        it("Testing the add function, adding 2 + 3 expects 5", function () {
            expect(calc.add(2, 3)).to.be.equal(5);
        });
    });
});

describe("Calculator REST API Test", function () {
    describe("Calculator REST API Test", function () {
        before(function (done) { // starter server. Ka også gi database string med for at teste db.
            calc.calcServer(PORT, function (myServer) {
                server = myServer;
                done(); // mocha skal vente
            });
        });
        after(function (done) {
            server.close();
            done();
        });

        /*  it("Testing the calc/add/-3/3 expects 5", function (done) {
             request(URL + "-3/3", function (err, res, body) {
                 expect(Number(body)).to.be.equal(0);
                 done();
             }); */

        it("Testing the calc/add/2/3 expects 5", function (done) {
            request(URL + "2/3", function (err, res, body) {
                expect(Number(body)).to.be.equal(5);
                done();
            });

            //});
        });
    });
});