function make_avg(array, size) {
    if (size === 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < size; i++) {
        sum += array[i];
    }

    var average = sum / size;
    return average;
}

var array = [1, 5, 90, 34, 67]
var size = array.length;
var getAverage = make_avg(array, size);
console.log(getAverage);