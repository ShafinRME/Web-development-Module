const combineArrayAndGetMaxNumber = (numbers1, numbers2) => {
    let newNumbers = [];

    for (number of numbers1) {
        newNumbers.push(number);
    }
    for (number of numbers2) {
        newNumbers.push(number);
    }

    let max = newNumbers[0];
    for (let i = 0; i <= newNumbers.length; i++) {
        if (newNumbers[i] >= max) {
            max = newNumbers[i];
        }
        else {
            continue;
        }
    }

    return max;
}


const inputNumbers1 = [1001, 10, 1002, 46, 33];

const inputNumbers2 = [87, 999, -100, 100, 205, 203, -90];

const outCombineAndMax = combineArrayAndGetMaxNumber(inputNumbers1, inputNumbers2);

console.log(outCombineAndMax);