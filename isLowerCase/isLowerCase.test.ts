import isLowerCase from "./isLowerCase";

describe("isLowerCase", () => {
  it("should return true for all lowercase characters in a string", () => {
    expect(isLowerCase("abcdefghijklmnopqrstuvwxyz")).toBe(true);
  });

  it("should return false for any upper case character in a strings", () => {
    expect(isLowerCase("HelloWorld")).toBe(false);
  });

  it("should return false for any number in a string", () => {
    expect(isLowerCase("helloworld123")).toBe(false);
  });

  it("should return false for a empty string", () => {
    expect(isLowerCase("")).toBe(false);
  });
});
