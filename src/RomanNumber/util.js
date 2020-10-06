const { romanRegex } = require('./regex');
const { ERROR, ROMAN_CHARS_VALUES: ROMAN_VALUES } = require('../constants');

/**
 * get Arabic number from a roman number
 * @param {String} romanNumber roman number to be converted to arabic
 * @returns {Number} arabic number
 */
const getArabicNumber = (romanNumber) => {
  if (!romanNumber) {
    throw new Error(ERROR.VALUE_REQUIRED);
  }
  if (typeof romanNumber !== 'string') throw new Error(ERROR.INVALID_VALUE);
  if (romanNumber.startsWith('MMMM')) throw new Error(ERROR.INVALID_RANGE);

  const regexResult = romanRegex.exec(romanNumber.toUpperCase());
  if (!regexResult) {
    throw new Error(ERROR.INVALID_VALUE);
  }
  return Object.entries(regexResult.groups).reduce(
    (acc, [key, value]) => acc + (value ? ROMAN_VALUES[key] * (value.length / key.length) : 0),
    0,
  );
};

/**
 * get Roman number from an arabic number
 * @param {Number} arabicNumber arabic number to be converted to roman
 * @returns {String} roman number
 */
const getRomanNumber = (arabicNumber) => {
  if ([null, undefined].includes(arabicNumber)) {
    throw new Error(ERROR.VALUE_REQUIRED);
  }
  if (typeof arabicNumber !== 'number') throw new Error(ERROR.INVALID_VALUE);
  if (arabicNumber <= 0 || arabicNumber >= 4000) {
    throw new Error(ERROR.INVALID_RANGE);
  }

  const initValue = ['', arabicNumber];
  const [romanNumber] = Object.entries(ROMAN_VALUES).reduce((prev, next) => {
    const [acc, rest] = prev;
    if (!rest) {
      return prev;
    }
    const [romanChar, value] = next;
    const ocurrences = Math.floor(rest / value);
    const newAcc = acc + romanChar.repeat(ocurrences);
    const newRest = rest % value;
    return [newAcc, newRest];
  }, initValue);
  return romanNumber;
};

module.exports = {
  getArabicNumber,
  getRomanNumber,
};
