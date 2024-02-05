// let inputNumber = [33, 50, 79, 78, 90, 101, 30];

// let divisibleByTenFilter = inputNumber.filter((number) => {
//     let divisibleNumber = number % 10 === 0;
//     return divisibleNumber;
// });

// console.log(divisibleByTenFilter);

let inputNumber = [33, 50, 79, 78, 90, 101, 30];

let divisibleByTenFind = inputNumber.find((number) => {
    let divisibleNumber = number % 10 === 0;

    return divisibleNumber;
})

console.log(divisibleByTenFind);
