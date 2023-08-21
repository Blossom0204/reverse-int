module.exports = function reverse(n) {
  const reverseString = n.toString().split('').reverse().join('');
  return parseInt(reverseString);
};
