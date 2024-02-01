import { isOddNumber } from "./main.js";

var expect = chai.expect;

describe("function isOddNumber", () => {
    // each test case
    it("should be true if 3", () => {
        const res = isOddNumber(3);
        expect(res).to.be.true;
    });
});
