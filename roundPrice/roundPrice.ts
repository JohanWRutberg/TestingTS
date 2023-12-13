function roundPrice(price: number, options: { pattern?: string; currency?: string } = {}): string {
  const { pattern = "%PRICE% %CURRENCY%", currency = "SEK" } = options;

  const thirdDecimal = Math.floor((price * 1000) % 10);

  const roundedPrice = thirdDecimal >= 5 ? Math.ceil(price * 100) / 100 : Math.floor(price * 100) / 100;

  const formattedPrice = roundedPrice.toFixed(2);

  const formattedOutput = pattern.replace("%PRICE%", formattedPrice).replace("%CURRENCY%", currency);

  return formattedOutput;
}

export default roundPrice;
