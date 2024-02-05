const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
]

// let sum = 0;

// for (let i = 0; i < people.length; i++) {
//     sum = sum + people[i].age;
// }

// console.log(sum);

let sum = people.reduce((initialSum, person) => initialSum + person.age, 0);

console.log(sum);