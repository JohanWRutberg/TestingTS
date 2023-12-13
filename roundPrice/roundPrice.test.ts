import roundPrice from "./roundPrice";

describe("roundPrice", () => {
  it("should round up a decimal price and add SEK to the end", () => {
    expect(roundPrice(232.10542)).toBe("232.11 SEK");
    expect(roundPrice(14)).toBe("14.00 SEK");
    expect(roundPrice(1024.2048)).toBe("1024.20 SEK");
  });

  it("should round up a decimal price and add USD to the end", () => {
    expect(roundPrice(1024.2048, "USD")).toBe("USD 1024.20");
  });

  it("should handle negative prices and round up", () => {
    expect(roundPrice(-15.6789)).toBe("-15.68 SEK");
  });

  it("should handle zero and round up", () => {
    expect(roundPrice(0.001)).toBe("0.01 SEK");
  });
});
