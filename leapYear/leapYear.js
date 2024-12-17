function isLeapYear(year) {
  if (isNumDivisibleBy(year, 400)) {
    return true;
  }
  if (isNumDivisibleBy(year, 100)) {
    return false;
  }
  return isNumDivisibleBy(year, 4);
}

function isNumDivisibleBy(num, divider) {
  return num % divider === 0;
}

module.exports = {
  isLeapYear,
};
