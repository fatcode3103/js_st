const { isOddNumber, cloneArray } = require("./main");

test("should be true if 3", () => {
    expect(isOddNumber(3)).toBe(true);
});

test("should be true if 2", () => {
    expect(isOddNumber(2)).toBe(false);
});

test("should be arr if arr", () => {
    const arr = [1, 2, 3];
    expect(cloneArray(arr)).toEqual(arr);
});
