const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOfIndex = [];
  arr.findIndex((el, index) => {
      if (el === -1) {
          arrOfIndex.push(index)
      }
  })
  console.log(arrOfIndex)
  let sorted = arr.sort((a,b)=>{
      return a-b
  });
  while (sorted[0] === -1 ) {
      sorted.shift()
  }
  for (let i = 0; i < arrOfIndex.length; i++) {
      sorted.splice(arrOfIndex[i], 0, -1)
  }
  if (arrOfIndex.length === 0) {
      return arr.sort((a,b)=>{
          return a-b
      })
  } else {
      return sorted;
  }
}

module.exports = {
  sortByHeight
};
