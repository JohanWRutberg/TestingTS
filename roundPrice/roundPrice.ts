function roundPrice(price: number, options: { currencyPattern?: string; currency?: string } = {}): string {
  const { currencyPattern = "%PRICE% %CURRENCY%", currency = "SEK" } = options;

  const thirdDecimal = Math.floor((price * 1000) % 10);

  const roundedPrice = thirdDecimal >= 5 ? Math.ceil(price * 100) / 100 : Math.floor(price * 100) / 100;

  const formattedPrice = roundedPrice.toFixed(2);

  const formattedPattern = currencyPattern.replace("%PRICE%", formattedPrice).replace("%CURRENCY%", currency);

  return formattedPattern;
}

export default roundPrice;
