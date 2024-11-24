const reverseString = function(string) {
    // split = divide string to array
    // reverse = reverse array
    // join = combine string to new string
    const result = string.split('').reverse().join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
