// let oddArray = [1, 3, 5, 7, 9];

// let evenArray = [];

// for (let i = 0; i < oddArray.length; i++) {
//     let evenNumber = oddArray[i] + 1;
//     evenArray.push(evenNumber);
// }

// console.log(evenArray);

let oddArray = [1, 3, 5, 7, 9];

let evenArray = oddArray.map((oddNumber => {
    let evenNumber = oddNumber + 1;
    return evenNumber;
}))

console.log(evenArray);

