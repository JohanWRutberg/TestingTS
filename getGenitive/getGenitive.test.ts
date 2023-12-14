import getGenitive from "./getGenitive";

describe("getGenitive", () => {
  it("should return genitive form for names ending with 's'", () => {
    expect(getGenitive("Marcus")).toBe("Marcus");
    expect(getGenitive("Lars")).toBe("Lars");
    expect(getGenitive("Jonas")).toBe("Jonas");
  });

  it("should add 's' to names not ending with 's'", () => {
    expect(getGenitive("Anna")).toBe("Annas");
    expect(getGenitive("David")).toBe("Davids");
    expect(getGenitive("Johan")).toBe("Johans");
  });
});
