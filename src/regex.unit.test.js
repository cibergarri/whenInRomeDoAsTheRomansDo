const { expect } = require('chai');
const { romanRegex } = require('./regex');

describe('Regex', () => {
  it('should return a valid regex', () => {
    expect(romanRegex).to.be.instanceOf(RegExp);
  })
  it('should validate a valid roman number', async () => {
    expect(romanRegex.test('V')).to.be.eq(true);
  });
  it('should not validate a invalid roman number (invalid)', async () => {
    expect(romanRegex.test('invalid')).to.be.eq(false);
  });
  it('should not validate a invalid roman number (XCXXX)', async () => {
    expect(romanRegex.test('XCXXX')).to.be.eq(false);
  });
});
