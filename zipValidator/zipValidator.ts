function validateZip(zip: string): boolean {
  const zipRegex = /^\d{5}$/;
  return zipRegex.test(zip);
}

export default validateZip;

/*
^:      Börja från början av strängen.
\d{5}:  Matcha en siffra. Följ av exakt fem siffror.
$:      Sluta vid slutet av strängen.
*/
