const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n.toString().split('').reduce(function(a, b, c = 0) {
    return +a + +b;
})
console.log(sum)
if (sum > 9) {
    return sum.toString().split('').reduce(function(a, b, c = 0) {
        return +a + +b;
    })
} else {
    return sum;
}
}

module.exports = {
  getSumOfDigits
};
