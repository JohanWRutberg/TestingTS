import createHeading from "./headingCreator";

describe("createHeading", () => {
  it("should create an h1 heading", () => {
    expect(createHeading("Hello", 1)).toBe(`<h1>Hello</h1>`);
  });

  it("should create an h2 heading", () => {
    expect(createHeading("Next level", 2)).toBe(`<h2>Next level</h2>`);
  });

  it("should throw an Error for an invalid heading level", () => {
    expect(() => createHeading("Invalid heading!", 7)).toThrow(`Heading level must be between 1 and 6`);
  });
});
