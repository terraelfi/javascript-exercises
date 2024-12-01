const leapYears = function(userYears) {
    const isYearDivisiblebyFour = userYears % 4 === 0;
    const isYearDivisiblebyFourHundred = userYears % 400 === 0;
    const isCentury = userYears % 100 === 0;

    if (isYearDivisiblebyFour && (!isCentury || isYearDivisiblebyFourHundred)) {
        return true
    } else {
        return false
    }
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
