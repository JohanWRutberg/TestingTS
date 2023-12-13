function roundPrice(price: number, currencyPattern: string = "%PRICE% SEK"): string {
  const thirdDecimal = Math.floor((price * 1000) % 10);

  const roundedPrice = thirdDecimal >= 5 ? Math.ceil(price * 100) / 100 : Math.floor(price * 100) / 100;

  const formattedPrice = roundedPrice.toFixed(2);

  return currencyPattern.replace("%PRICE%", formattedPrice);
}

export default roundPrice;
