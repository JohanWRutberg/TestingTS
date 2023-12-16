/* ###################################################################################################################### */
/* Vet inte hur det var tänkt här, men gjorde 4a, 4b och 4c i samma fil och inte i olika. Detta är resultatet av samtliga */
/* ###################################################################################################################### */

function roundPrice(price: number, options: { pattern?: string; currency?: string } = {}): string {
  /* Destrukturerar options objektet för att extrahera pattern och currency */
  /* Om pattern eller currency inte finns i options, används standardvärdena "%PRICE% %CURRENCY%" och "SEK" */
  const { pattern = "%PRICE% %CURRENCY%", currency = "SEK" } = options;

  /* Multiplicerar price med 1000 och tar modulus 10 för att få den tredje decimalen */
  const thirdDecimal = Math.floor((price * 1000) % 10);

  /* Om den tredje decimalen är 5 eller högre, använd Math.ceil för att avrunda uppåt, annars använd Math.floor för att avrunda nedåt */
  const roundedPrice = thirdDecimal >= 5 ? Math.ceil(price * 100) / 100 : Math.floor(price * 100) / 100;

  /* Använder toFixed(2) för att formatera roundedPrice till två decimaler */
  const formattedPrice = roundedPrice.toFixed(2);

  /* Använder pattern.replace för att ersätta placeholders %PRICE% och %CURRENCY% med formattedPrice och currency */
  const formattedOutput = pattern.replace("%PRICE%", formattedPrice).replace("%CURRENCY%", currency);

  return formattedOutput;
}

export default roundPrice;
