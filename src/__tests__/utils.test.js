// Your tests here
const { isPalindrome } = require('../utils');

describe("isPalindrome", () => {
  it("returns true for 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive, returns true for 'Mom'", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for strings with non-alphabetic characters", () => {
    expect(() => isPalindrome("race-car")).toThrow("Input must only contain alphabetic characters");
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
