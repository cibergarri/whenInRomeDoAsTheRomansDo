/* eslint-disable no-underscore-dangle */
const { getArabicNumber, getRomanNumber } = require('./util');

/**
 * Converts numbers from arabic to roman and viceversa
 * @param {Number|String} number number to initialize the instance
 */
function RomanNumber(number) {
  if (!new.target) return new RomanNumber(number);

  if (typeof number === 'string') {
    this._roman = number;
    this._arabic = getArabicNumber(number);
  } else {
    this._arabic = number;
    this._roman = getRomanNumber(number);
  }

  /**
   * returns number in arabic format
   */
  this.toInt = function toInt() {
    return this._arabic;
  };
  /**
   * returns number in roman format
   */
  this.toString = function toString() {
    return this._roman;
  };
}

module.exports = RomanNumber;
