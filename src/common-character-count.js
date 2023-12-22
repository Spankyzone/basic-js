const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3()
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const arrOfChar = []
    let arr = [];
    arrOfChar.push((s1.split('')), (s2.split('')))
    for (let i = 0; i < arrOfChar[0].length; i++) {
        const s1element = arrOfChar[0][i];
        for (let j = 0; j < arrOfChar[1].length; j++) {
            const s2element = arrOfChar[1][j];
            if (s1element === s2element) {
                arr.push(s1element)
                break;
            }
        }
    }
    const uniq = [...new Set(arr)]
    if (uniq.length === 1) {
        return arr.length;
    } else {
        return uniq.length;
    }
}

module.exports = {
  getCommonCharacterCount
};
