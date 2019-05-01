var counter = function (arr) {
    return 'There are  ' + arr.length + ' elements in this array';
};

var adder = function (a, b) {
    return `The sum of 2 numbers is $` + (a + b);
};
var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}

/* module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi; */







/* // This file is completely a module for getmodule.js file.

// a function expression is made here.
var counter = function (arry) {
    return 'The number of ' + arry.length + '\n done!';
};
// Adding more modules
var adder = function (a, b) {
    return 'On adding the two number it gives' + (a + b);
}
var pi = 3.1535;

// module.exports is the important part, it makes the counter available for other modules!
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.bi = pi; */