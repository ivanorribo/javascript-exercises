const removeFromArray = function(arr, ...args) {
    let end = [];
    arr.forEach((element) => {
        if (!args.includes(element)){
            end.push(element);
        }
    });
    return end;
};

// Do not edit below this line
module.exports = removeFromArray;
