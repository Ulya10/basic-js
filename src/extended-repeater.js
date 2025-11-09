const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
 const mainStr = String(str);
  const addStr = options && options.addition !== undefined ? String(options.addition) : '';
  
  const repTimes = options?.repeatTimes || 1;
  const separator = options?.separator || '+';
  const addRepTimes = options?.additionRepeatTimes || 1;
  const addSep = options?.additionSeparator || '|';
  
  let additionRes = '';
  if (addStr){
    for (let i = 0; i < addRepTimes; i++){
      additionRes += addStr;
      if (i < addRepTimes - 1){
        additionRes += addSep;
      }
    }
  }
  
  let res = '';
  for (let i = 0; i < repTimes; i++){
    res += mainStr + additionRes;
    if (i < repTimes - 1){
      res += separator;
    }
  }
  
  return res;
}

module.exports = {
  repeater
};
