const { expect } = require('chai');
const RomanNumber = require('./main');

describe('Main test', () => {
  it('should export a function', async () => {
    expect(typeof RomanNumber).to.be.eq('function')
  });
  describe('conversion', () => {
    const arabicValues = [
      [1, 'I'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [1968, 'MCMLXVIII'],
      [2999, 'MMCMXCIX'],
      [3000, 'MMM']
    ];
    arabicValues.forEach(([arabic, roman]) => {
      it(`should initialize the number with ${arabic} and return ${roman}`, () => {
        const romanNumber = new RomanNumber(arabic);
        expect(romanNumber.toString()).to.be.eq(roman);
      })
    });

    const romanValues = [
      ["I", 1],
      ["III", 3],
      ["IV", 4],
      ["V", 5],
      ['CDXXIX', 429],
      ['MCDLXXXII', 1482],
      ['MCMLXXX', 1980],
    ];
    romanValues.forEach(([roman, arabic]) => {
      it(`should initialize the number with ${roman} and return ${arabic}`, () => {
        const romanNumber = new RomanNumber(roman);
        expect(romanNumber.toInt()).to.be.eq(arabicValues);
      })
    });
  })
  describe('errors', () => {
    it('should throw an error when called with null', async () => {
      expect(() => new RomanNumber('null')).to.throw('value required');
    });
    it('should throw an error when called with empty string', async () => {
      expect(() => new RomanNumber('')).to.throw('value required');
    });
    it('should throw an error when called with zero (out of range)', async () => {
      expect(() => new RomanNumber(0)).to.throw('invalid range');
    });
    it('should throw an error when called with an invalid value (error)', async () => {
      expect(() => new RomanNumber('error')).to.throw('invalid value');
    });
    it('should throw an error when called with an invalid value (IIII)', async () => {
      expect(() => new RomanNumber('IIII')).to.throw('invalid value');
    });
    it('should throw an error when called with an invalid value (CD1X)', async () => {
      expect(() => new RomanNumber('CD1X')).to.throw('invalid value');
    });
    it('should throw an error when called with a number string', async () => {
      expect(() => new RomanNumber('1473')).to.throw('invalid value');
    });
    it('should throw an error when called with an invalid range (10000)', async () => {
      expect(() => new RomanNumber(10000)).to.throw('invalid range');
    });
    it('should throw an error when called with an invalid range (MMMMCMXCIX)', async () => {
      expect(() => new RomanNumber('MMMMCMXCIX')).to.throw('invalid range');
    });
    it('should throw an error when called with an invalid range (MMMMDMXCIX)', async () => {
      expect(() => new RomanNumber('MMMMDMXCIX')).to.throw('invalid range');
    });
  })
})
