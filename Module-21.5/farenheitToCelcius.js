function farenheitToCelcius(farenheit) {
    let celcius = 5 / 9 * (farenheit - 32);

    return celcius;
}

let getFarenheit = farenheitToCelcius(98.420);

console.log(getFarenheit.toFixed(3));