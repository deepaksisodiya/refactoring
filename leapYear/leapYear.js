

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

module.exports = {
    isLeapYear
}