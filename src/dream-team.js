const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members === "number" || typeof members === 'boolean' || typeof members === 'undefined' || members === null) {
    return false;
  } else {
    let strArr = [];
    let firstLetter = '';
    for (let index = 0; index < members.length; index++) {
        if (typeof members[index] === 'string') {
            strArr.push(members[index].trim().toLowerCase());
            strArr.sort();
        } 
    }
    for (let j = 0; j < strArr.length; j++) {
        const element = strArr[j];
        firstLetter += element[0];
    }
    return firstLetter.toLocaleUpperCase();
  }
}

module.exports = {
  createDreamTeam
};
