/* eslint-disable no-underscore-dangle */
const { getArabicNumber, getRomanNumber } = require('./util');

function RomanNumber(number) {
  if (!new.target) return new RomanNumber(number);

  if (typeof number === 'string') {
    this._roman = number;
    this._arabic = getArabicNumber(number);
  } else {
    this._arabic = number;
    this._roman = getRomanNumber(number);
  }

  this.toInt = function toInt() {
    return this._arabic;
  };
  this.toString = function toString() {
    return this._roman;
  };
}

module.exports = RomanNumber;
