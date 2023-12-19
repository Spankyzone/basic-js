const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let k = Math.LN2 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity === 'string' && !sampleActivity.includes('-') && /[a-zA-Z\s]/.test(sampleActivity) === false && sampleActivity.length > 0) {
      let t;
      if (sampleActivity.includes('.')) {
          let numFloat = Number.parseFloat(sampleActivity);
          if (numFloat <= 0 || numFloat > 15) {
              return false;
          } else {
              t = Math.log(MODERN_ACTIVITY / numFloat) / k;
          }
      } else {
          let numInt = Number.parseInt(sampleActivity)
          if (numInt <= 0 || numInt > 15) {
              return false;
          } else {
              t = Math.log(MODERN_ACTIVITY / numInt) / k;
          }
      }
      return Math.ceil(t);
  } else {
      return false;
  }
}

module.exports = {
  dateSample
};
