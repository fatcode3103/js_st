const isOddNumber = require("./main");

test("should be true if 3", () => {
    expect(isOddNumber(3)).toBe(true);
});

test("should be true if 2", () => {
    expect(isOddNumber(2)).toBe(false);
});
