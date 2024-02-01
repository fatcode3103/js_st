function isOddNumber(number) {
    return number % 2 === 1;
}

function cloneArray(arr) {
    return [...arr];
}

module.exports = { isOddNumber, cloneArray };
