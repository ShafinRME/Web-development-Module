// // Function declaration
// function addNumbers(a, b) {
//     // Function body
//     var sum = a + b;
//     return sum; // Return the result
//   }

//   // Function call
//   var result = addNumbers(5, 3);
//   console.log(result); // Output: 8

// function myFunctionDeclaration() {
//     // function body
//   }



//   var myFunctionExpression = function() {
//     // function body
//   };

//   // Function declaration
// hoistedFunction(); // This works
// function hoistedFunction() {
//   console.log("Function is hoisted");
// }

// // Function expression
// // nonHoistedFunction(); // This would throw an error
// var nonHoistedFunction = function() {
//   console.log("Function expression is not hoisted");
// };


// // Anonymous function expression
// var anonymousFunction = function() {
//     console.log("This is an anonymous function");
//   };

//   // Named function expression
//   var namedFunction = function named() {
//     console.log("This is a named function");
//   };

// function regularFunction(arg1, arg2) {
//     // function body
//     return result;
//   }

//   const arrowFunction = (arg1, arg2) => {
//     // function body
//     return result;
//   };

//   function regularFunctionWithArgs() {
//     console.log(arguments); // Access the arguments object
//   }

//   const arrowFunctionWithArgs = (...args) => {
//     console.log(args); // Use rest parameters instead
//   };

// const person = {
//     name: "John",
//     age: 30
//   };

//   const personName = person.name;
//   console.log(personName); // Outputs "John"

const person = {
    name: "John",
    age: 30
};

const propertyName = Object.keys(person);
const values = Object.values(person);
console.log(propertyName, values); // Outputs "John"




