const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str === '') {
    return '';
  }
  
  let res = '';
  let count = 1;

  for (let i = 1; i < str.length; i++){
    if (str[i] === str[i - 1]){
      count++;
    } else {
      if (count > 1){
        res += count + str[i - 1];
      } else {
        res += str[i - 1];
      }
      count = 1;
    }
  }

  if (count > 1){
    res += count + str[str.length - 1];
  } else {
    res += str[str.length - 1];
  }

  return res;
}

module.exports = {
  encodeLine
};
