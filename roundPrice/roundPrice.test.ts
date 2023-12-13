import roundPrice from "./roundPrice";

describe("roundPrice", () => {
  it("should round up a decimal price and add SEK to the end", () => {
    expect(roundPrice(232.10542)).toBe("232.11 SEK");
    expect(roundPrice(14)).toBe("14.00 SEK");
    expect(roundPrice(1024.2048)).toBe("1024.20 SEK");
  });

  it("should round up a decimal price and add USD to the end", () => {
    expect(roundPrice(1024.2048, { currencyPattern: "USD %PRICE%" })).toBe("USD 1024.21");
  });

  it("should round up a decimal price and add specified currency to the end", () => {
    expect(roundPrice(1024.2048, { currency: "NOK" })).toBe("1024.22 NOK");
  });

  it("should round up a decimal price and add specified currency and pattern to the end", () => {
    expect(roundPrice(1024.2048, { currencyPattern: "CAD %PRICE%", currency: "CAD" })).toBe("CAD 1024.23");
  });
});
