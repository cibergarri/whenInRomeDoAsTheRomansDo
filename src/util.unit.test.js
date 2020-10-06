const { expect } = require('chai');
const { getArabicNumber, getRomanNumber } = require('./util');

describe('Util', () => {
  describe('getArabicNumber', () => {
    it('should export a function', async () => {
      expect(typeof getArabicNumber).to.be.eq('function')
    });
  })
  describe('getRomanNumber', () => {
    it('should export a function', async () => {
      expect(typeof getRomanNumber).to.be.eq('function')
    });
  })
});
