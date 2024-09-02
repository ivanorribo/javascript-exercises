const sumAll = function(min, max) {
let total = 0;

if (Number.isInteger(min) && Number.isInteger(max)){
    if (min > max)  {
        for(let i = max; max <= min; max++) {
            total += max;
            }
    } else if (min < 0 || max < 0) {
        return('ERROR');
    } else {
        for(let i = min; min <= max; min++) {
        total += min;
        }
    }
    return total;
} else  {
    return 'ERROR';
}
};

// Do not edit below this line
module.exports = sumAll;
