import validateZip from "./zipValidator";

describe("validateZip", () => {
  it("should return True for valid zip code", () => {
    expect(validateZip("12345")).toBe(true);
  });

  it("should return False for invalid zip code with less than 5 digits", () => {
    expect(validateZip("1234")).toBe(false);
  });

  it("should return False for invalid zip code with more than 5 digits", () => {
    expect(validateZip("123456")).toBe(false);
  });

  it("should return False for invalid zip code containing non-digit characters", () => {
    expect(validateZip("abcde")).toBe(false);
  });
});
