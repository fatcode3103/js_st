export const isOddNumber = (number) => number % 2 === 1;

export const countEvenNumbers = (numberList) => {
    return numberList.filter((number) => number % 2 === 0).length;
};
