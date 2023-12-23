import Fraction from 'fraction.js';

export function decimalToFraction(decimal: number): string {
  const fraction: Fraction = new Fraction(decimal);

  const numerator: number = fraction.n;
  const denominator: number = fraction.d;

  const minusSign: string = decimal < 0 ? '-' : '';
  const fractionString: string = `${minusSign}{${numerator}\\over${denominator}}`;

  if (denominator > 1) {
    return fractionString;
  }

  return `${minusSign}${numerator}`;
}
