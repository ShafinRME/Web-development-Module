function getProfit(p, r, n) {
    let i = (p * r * n) / 100;

    return i;
}

let getPro = getProfit(1000, 5, 3);

console.log(getPro);