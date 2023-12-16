function isPrimeNumber(num: number): boolean {
  if (num < 2) {
    return false;
  }

  /* Använder en for-loop för att iterera över möjliga delare (i) från 2 upp till roten av num. */
  /* Inuti loopen kontrolleras om num är jämnt delbart med i. Om det är det så returneras false,
  vilket visar att num inte är ett primtal. */
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

export default isPrimeNumber;
