const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numString = n.toString();
  const arrOfNum = [];
  for (let i = 0; i < numString.length; i++) {
    const newNumString = numString.slice(0, i) + numString.slice(i + 1);
    const newNum = parseInt(newNumString);
    arrOfNum.push(newNum);
  }
  const maxNumber = Math.max(...arrOfNum);
  return maxNumber;
}

module.exports = {
  deleteDigit
};
