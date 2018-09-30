let chai = require("chai");
let expect = chai.expect;
let calculator = '../app/calculator';

describe("Test Calculator", function () {
    describe("Calculator addition", function () {
        it("The calculator adds 2 numbers", function () {
            let adding = calculator.add(2, 2);
            /* let substracting = calculator.substract(2, 2);
            let multipling = calculator.multipling(2, 2);
            let divisioning = calculator.divisioning(4, 2); */

            expect(adding).to.equal(4);
            /*  expect(substracting).to.equal(0);
             expect(multipling).to.equal(4);
             expect(divisioning).to.equal(2); */
        })
    })
})