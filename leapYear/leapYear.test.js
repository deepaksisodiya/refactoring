import { isLeapYear } from "./leapYear";

describe("isLeapYear", () => {
  it("should return false for 1997", () => {
    expect(isLeapYear(1997)).toBe(false);
  });

  it("should return true for 1996", () => {
    expect(isLeapYear(1996)).toBe(true);
  });

  it("should return true for 1600", () => {
    expect(isLeapYear(1600)).toBe(true);
  });

  it("should return false for 1800", () => {
    expect(isLeapYear(1800)).toBe(false);
  });
});
