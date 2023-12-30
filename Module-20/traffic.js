function traffic_signal(color) {
    if (color === 'Red') {
        return 'You may be in DANGER';
    }
    else if (color === 'Yellow') {
        return 'You should stop';
    }
    else {
        return 'You should cross the Road';
    }
}
var col = 'Green'
var getColr = traffic_signal(col);
console.log(getColr);