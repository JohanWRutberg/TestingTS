import isPrimeNumber from "./isPrimeNumber";

describe("isPrimeNumber", () => {
  it("should return true for Prime numbers between 1-20", () => {
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(3)).toBe(true);
    expect(isPrimeNumber(5)).toBe(true);
    expect(isPrimeNumber(7)).toBe(true);
    expect(isPrimeNumber(11)).toBe(true);
    expect(isPrimeNumber(13)).toBe(true);
    expect(isPrimeNumber(17)).toBe(true);
    expect(isPrimeNumber(19)).toBe(true);
  });

  it("should return false for non Prime numbers between 1-20", () => {
    expect(isPrimeNumber(1)).toBe(false);
    expect(isPrimeNumber(4)).toBe(false);
    expect(isPrimeNumber(6)).toBe(false);
    expect(isPrimeNumber(8)).toBe(false);
    expect(isPrimeNumber(9)).toBe(false);
    expect(isPrimeNumber(10)).toBe(false);
    expect(isPrimeNumber(12)).toBe(false);
    expect(isPrimeNumber(14)).toBe(false);
    expect(isPrimeNumber(15)).toBe(false);
    expect(isPrimeNumber(16)).toBe(false);
    expect(isPrimeNumber(18)).toBe(false);
    expect(isPrimeNumber(20)).toBe(false);
  });

  it("should return false for negative numbers", () => {
    expect(isPrimeNumber(-2)).toBe(false);
    expect(isPrimeNumber(-3)).toBe(false);
  });

  it("should return false for 0 and 1", () => {
    expect(isPrimeNumber(0)).toBe(false);
    expect(isPrimeNumber(1)).toBe(false);
  });
});
