const { expect } = require('chai');
const { ERROR } = require('../constants');
const { getArabicNumber, getRomanNumber } = require('./util');

describe('Util', () => {
  describe('getArabicNumber', () => {
    it('should export a function', async () => {
      expect(typeof getArabicNumber).to.be.eq('function');
    });
    it('should return the arabic translation of a roman number', () => {
      expect(getArabicNumber('MCMLXXXI')).to.be.eq(1981);
    });
    describe('errors', () => {
      it('should throw an error if no value provided', () => {
        expect(() => getArabicNumber()).to.throw(ERROR.VALUE_REQUIRED);
      });
      it('should throw an error if null value provided', () => {
        expect(() => getArabicNumber(null)).to.throw(ERROR.VALUE_REQUIRED);
      });
      it('should throw an error if a non valid type provided', () => {
        expect(() => getArabicNumber({})).to.throw(ERROR.INVALID_VALUE);
      });
      it('should throw an error if an invalid roman number provided', () => {
        expect(() => getArabicNumber('XLXXX')).to.throw(ERROR.INVALID_VALUE);
      });
      it('should throw an error if an out of range value is provided', () => {
        expect(() => getArabicNumber('MMMMXXX')).to.throw(ERROR.INVALID_RANGE);
      });
    });
  });
  describe('getRomanNumber', () => {
    it('should export a function', async () => {
      expect(typeof getRomanNumber).to.be.eq('function');
    });
    it('should return the roman translation of an arabic number', () => {
      expect(getRomanNumber(2020)).to.be.eq('MMXX');
    });
    describe('errors', () => {
      it('should throw an error if no value provided', () => {
        expect(() => getRomanNumber()).to.throw(ERROR.VALUE_REQUIRED);
      });
      it('should throw an error if null value provided', () => {
        expect(() => getRomanNumber(null)).to.throw(ERROR.VALUE_REQUIRED);
      });
      it('should throw an error if non-numeric value provided', () => {
        expect(() => getRomanNumber('2019')).to.throw(ERROR.INVALID_VALUE);
      });
      it('should throw an error if an out of range value is provided', () => {
        expect(() => getRomanNumber(5000)).to.throw(ERROR.INVALID_RANGE);
      });
      it('should throw an error if an out of range value is provided', () => {
        expect(() => getRomanNumber(-100)).to.throw(ERROR.INVALID_RANGE);
      });
    });
  });
});
