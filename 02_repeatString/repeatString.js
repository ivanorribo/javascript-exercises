const repeatString = function(string, num) {
    if (num < 0) {return 'ERROR'};
    let end = '';
    for (i = 0; i < num; i++){
        end = end + string;
    };
    return end;
};

// Do not edit below this line
module.exports = repeatString;
