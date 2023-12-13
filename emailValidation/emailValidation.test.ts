import validateEmail from "./emailValidation";

describe("validateEmail", () => {
  it("should return True for a valid email address", () => {
    expect(validateEmail("johrut@gmail.com")).toBe(true);
  });

  it("should return False for a invalid email address without domain", () => {
    expect(validateEmail("johrut@gmail")).toBe(false);
  });

  it('should return False for a invalid email address without "@"', () => {
    expect(validateEmail("johrutgmail.com")).toBe(false);
  });
});
