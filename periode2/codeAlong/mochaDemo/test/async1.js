const expect = require("chai").expect;

// Testing Asynchronous Code 1 slide
describe("Testing async behaviour", function () {
    var foo = false;
    before(function (done) {
        setTimeout(function () {
            foo = true;
            done(); //Test will fail without this. done() får mocka til at vente
        }, 1000);
    });
    it("should pass (with done called)", function () {
        expect(foo).to.equal(true);
    });
});