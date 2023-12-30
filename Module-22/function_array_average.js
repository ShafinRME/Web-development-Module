function average(marks) {
    let sum = 0;
    let average;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    average = sum / marks.length;
    return average;
}

let numbers = [-12, 78, 37, 57];

let getAverage = average(numbers);

console.log(getAverage);