let numbers = [-23, -78, -45, 107, -100, -104, 108];

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (max <= numbers[i]) {
        max = numbers[i];
    }
}

console.log('Max1 =', max)
let max2 = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (max == numbers[i]) {
        continue;
    }
    else {
        if (max2 <= numbers[i]) {
            max2 = numbers[i];
        }
    }
}

console.log('Max2 =', max2);