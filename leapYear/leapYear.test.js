import { isLeapYear } from './leapYear';

describe('isLeapYear', () => {
    it('1997 should not be a leap year', () => {
        expect(isLeapYear(1997)).toBe(false);
    });

    it('1996 should be a leap year', () => {
        expect(isLeapYear(1996)).toBe(true);
    });
});

  