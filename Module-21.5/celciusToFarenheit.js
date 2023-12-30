function celciusToFarenheit(celcius) {
    let farenheit = (9 * celcius) / 5 + 32;

    return farenheit;
}

let getFarenheit = celciusToFarenheit(36.9);

console.log(getFarenheit.toFixed(3));