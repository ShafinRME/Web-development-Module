function calculateGrade(marks) {
    if (marks >= 80) {

        return 'A+';
    }
    else if (marks >= 60) {
        return 'B';
    }
    else if (marks >= 33) {
        return 'C';
    }
    else {
        return 'Fail';
    }
}

let getResult = calculateGrade(90);
console.log(getResult);