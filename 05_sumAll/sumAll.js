const sumAll = function (min, max) {
    let number = 0;
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";


    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }


    for (let i = min; i <= max; i++) {
        number += i;
    }
    return number;
};

// Do not edit below this line
module.exports = sumAll;
