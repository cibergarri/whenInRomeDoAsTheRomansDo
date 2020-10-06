/* eslint-disable no-console */
const RomanNumber = require('./RomanNumber');

const romanNumber1 = new RomanNumber('XX');
const romanNumber2 = new RomanNumber(40);

console.log(romanNumber1.toInt()); // => 20
console.log(romanNumber1.toString()); // => ‘XX’
console.log(romanNumber2.toInt()); // => 40
console.log(romanNumber2.toString()); // => ‘XL’
