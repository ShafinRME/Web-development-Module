const addition = (num1, num2 = 5) => {
    const add = num1 + num2;
    return add;
}

const additionOut = addition(10, 7);

console.log(additionOut);