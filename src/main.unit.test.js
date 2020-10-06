const { expect } = require('chai');
const RomanNumber = require('./main');

describe('Main test', () => {
  it('should export a function', async () => {
    expect(typeof RomanNumber).to.be.eq('function')
  });

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
    it('should throw an error when called with an invalid value', async () => {
      expect(() => new RomanNumber('error')).to.throw('invalid value');
    });
    it('should throw an error when called with a number string', async () => {
      expect(() => new RomanNumber('1473')).to.throw('invalid value');
    });
    it('should throw an error when called with an invalid range', async () => {
      expect(() => new RomanNumber('MMMMCMXCIX')).to.throw('invalid range');
    });
    it('should throw an error when called with an invalid range', async () => {
      expect(() => new RomanNumber('MMMMDMXCIX')).to.throw('invalid range');
    });
    
  })
})
