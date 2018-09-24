let expect = require("chai").expect;
let converter = require("../app/converter");

describe("Color Code Converter", function () {
    describe("RGB to Hex conversion", function () {
        it("converts the basic colors", function () {
            let redHex = converter.rgbToHex(255, 0, 0);
            let greenHex = converter.rgbToHex(0, 255, 0);
            let blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("Hex to RGB conversion", function () {
        it("converts the basic colors", function () {
            let red = converter.hexToRgb("ff0000");
            let green = converter.hexToRgb("00ff00");
            let blue = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]); // to.deep.equal er en matcher. Matcher resultatet af en feature med den forventet værdi.
            expect(green).to.deep.equal([0, 255, 0]); // .deep matcher alle elementer i arrayet en ad gangen.
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});

// For at teste ligheden mellem 2 objekter kan vi skrive: expect(1+1).to.equal(2)