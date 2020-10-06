const { expect } = require('chai');
const { romanRegex } = require('./regex');
const { ROMAN_CHARS_VALUES } = require('./constants');

describe('Regex', () => {
  it('should return a valid regex', () => {
    expect(romanRegex).to.be.instanceOf(RegExp);
  });
  it('should validate a valid roman number', async () => {
    expect(romanRegex.test('V')).to.be.eq(true);
  });
  it('should not validate a invalid roman number (invalid)', async () => {
    expect(romanRegex.test('invalid')).to.be.eq(false);
  });
  it('should not validate a invalid roman number (XCXXX)', async () => {
    expect(romanRegex.test('XCXXX')).to.be.eq(false);
  });

  Object.keys(ROMAN_CHARS_VALUES).forEach((romanChar) => {
    it(`should return ${romanChar} information in its named group`, async () => {
      const { groups } = romanRegex.exec(romanChar);
      expect(groups[romanChar]).to.be.eq(romanChar);
    });
  });

  it('should return information for named groups mixed', () => {
    const { groups } = romanRegex.exec('MMCMLXXXIV');
    expect(groups.M).to.be.eq('MM');
    expect(groups.CM).to.be.eq('CM');
    expect(groups.L).to.be.eq('L');
    expect(groups.X).to.be.eq('XXX');
    expect(groups.IV).to.be.eq('IV');
  });
});
