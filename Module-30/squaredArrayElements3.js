const squaredArrayElements = (numbers) => {
    let sum = 0;
    const numberLength = numbers.length;
    for (number of numbers) {
        let squares = number * number;
        sum = sum + squares;
    }

    let average = sum / numberLength;

    return average;
}

const inputNumbers = [0, 2, 4];

const outSquaredNumbersAverage = squaredArrayElements(inputNumbers);

console.log(outSquaredNumbersAverage);