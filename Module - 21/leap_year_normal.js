function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let getLeapYear = leapYear(2024);

console.log(getLeapYear);