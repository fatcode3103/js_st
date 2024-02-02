import { expect } from "chai";
import { capitalize, isEvenNumber, cloneArray } from "./main.mjs";

describe("function capitalize", () => {
    it("should be HELLO if hello", () => {
        expect(capitalize("hello")).to.equal("HELLO");
    });
});

describe("function isEvenNumber", () => {
    it("should be true if 2", () => {
        expect(isEvenNumber(2)).to.be.true;
    });
    it("should be false if 5", () => {
        expect(isEvenNumber(5)).to.be.false;
    });
});

describe("function cloneArray", () => {
    it("returns the same array", () => {
        const arr = [1, 2, 3];
        expect(cloneArray(arr)).to.deep.equal(arr);
    });
});
