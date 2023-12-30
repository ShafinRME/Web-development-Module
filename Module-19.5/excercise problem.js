// for (let i = 0; i < 39; i++) {
//     console.log("I am not feeling well");
// }

// let count = 0;

// while (count < 5) {
//     console.log("Count: " + count);
//     count++;
// }
// for (initialization; condition; increment/decrement) {
//     // code to be executed in each iteration
// }
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration: " + i);
// }
// let count = 0;

// while (count < 5) {
//     console.log("Count: " + count);
//     // The loop variable (count) is not changed; it will always be 0
// }

// for (var i = 58; i < 99; i++) {
//     console.log(i);
// }

// for (var i = 412; i < 457; i += 2) {
//     console.log(i);
// }

// for (var i = 581; i <= 623; i += 2) {
//     console.log(i);
// }

// var learings = ['variables', 'push', 'pop', 'for loop', 'while loop', 'array'];

// for (var i = 0; i < learings.length; i++) {
//     console.log(learings[i]);
// }

// var mobiles = ['alcatel', 'nokia', 'samsung', 'redmi'];
// var i = 0;

// while (i < mobiles.length) {
//     console.log(mobiles[i]);
//     i++;
// }

// for (var i = 30; i <= 86; i++) {
//     if (i === 44) {
//         break;
//     }
//     else {
//         console.log(i);
//     }
// }


var bookPrices = [200, 450, 199, 564, 123, 5678, 290, 189, 156];

for (var i = 0; i < bookPrices.length; i++) {
    if (bookPrices[i] > 200) {
        continue;
    }
    else {
        console.log(bookPrices[i]);
    }
}