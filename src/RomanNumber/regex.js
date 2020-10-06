/**
 * Get regex capturing group for roman chars with its chars as the group name
 * @param {String} char roman character group
 * @param {Boolean} repeteable is a repeatable character group
 * @returns {String} regex string
 * @example getCharRegex('CM') => '(?<CM>CM)'
 * @example getCharRegex('M', true) => '(?<M>M{0,3})'
 */
const getCharRegex = (char, repeteable) => {
  const namedGroup = `?<${char}>`;
  const repeatableRegex = repeteable === true ? '{0,3}' : '';
  return `(${namedGroup}${char}${repeatableRegex})`;
};

/**
 * Get group of regex for each part of the number
 * @param {String[]} differenceChars char groups that use difference (CM,CD,XC,XL,IX,IV)
 * @param {String} doubleChar char group that is the unit double (D,L,V)
 * @param {String} unitChar char group for the unit (C,X,I)
 * @returns {String} regex string
 * @example getRegexGroup(['CM','CD'],'D','C') => '((?<CM>CM)|(?<CD>CD)|(?<D>D)?(?<C>C{0,3}))'
 */
const getRegexGroup = (differenceChars, doubleChar, unitChar) => {
  const diffRegex = differenceChars.map(getCharRegex).join('|');
  const doubleRegex = `${getCharRegex(doubleChar)}?`;
  const unitRegex = getCharRegex(unitChar, true);

  return `(${diffRegex}|${doubleRegex}${unitRegex})`;
};

const thousands = getCharRegex('M', true); //              (?<M>M{0,3})
const hundreds = getRegexGroup(['CM', 'CD'], 'D', 'C'); // ((?<CM>CM)|(?<CD>CD)|(?<D>D)?(?<C>C{0,3}))
const tens = getRegexGroup(['XC', 'XL'], 'L', 'X'); //     ((?<XC>XC)|(?<XL>XL)|(?<L>L)?(?<X>X{0,3}))
const units = getRegexGroup(['IX', 'IV'], 'V', 'I'); //    ((?<IX>IX)|(?<IV>IV)|(?<V>V)?(?<I>I{0,3}))

/**
 * Regex for validating a roman number and capturing its character groups
 */
const romanRegex = new RegExp(`^${thousands}${hundreds}${tens}${units}$`);

module.exports = {
  romanRegex,
};
