const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columnCount = matrix[0].length;
  let sum = 0;
  for (let index = 0; index < columnCount; index++) {
      for (let j = 0; j < matrix.length; j++) {
          const el = matrix[j][index];
          sum+=el;
          if (el === 0) {
              break;
          }
      }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
