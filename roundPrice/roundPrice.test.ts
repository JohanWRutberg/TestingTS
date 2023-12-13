import roundPrice from "./roundPrice";

describe("roundPrice", () => {
  it("should round up a decimal price and add SEK to the end with default pattern", () => {
    expect(roundPrice(232.10542)).toBe("232.11 SEK");
  });

  it("should round up a decimal price and add USD to the end with custom pattern", () => {
    expect(roundPrice(232.10542, { pattern: "USD %PRICE%" })).toBe("USD 232.11");
  });

  it("should add .00 and SEK to the end of an integer price with default pattern", () => {
    expect(roundPrice(14)).toBe("14.00 SEK");
  });

  it("should add .00 and USD to the end of an integer price with custom pattern", () => {
    expect(roundPrice(14, { pattern: "USD %PRICE%" })).toBe("USD 14.00");
  });

  it("should round up a decimal price and add SEK with default pattern", () => {
    expect(roundPrice(1024.2048)).toBe("1024.20 SEK");
  });

  it("should round up a decimal price and add USD with custom pattern", () => {
    expect(roundPrice(1024.2048, { pattern: "USD %PRICE%" })).toBe("USD 1024.20");
  });

  it("should handle custom pattern with currency and price", () => {
    expect(roundPrice(1024.2048, { pattern: "CAD %PRICE%", currency: "CAD" })).toBe("CAD 1024.20");
  });
});
