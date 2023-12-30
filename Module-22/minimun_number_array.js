let numbers = [23, 56, 23, 78, -67, -78, 100];

let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= min) {
        min = numbers[i];
    }
}

console.log(min);