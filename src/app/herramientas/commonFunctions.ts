import Fraction from 'fraction.js';
import { IMatrixElement } from './operaciones-con-matrices/matrix/interfaces';

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

export function getMatrixCellValue(cellValue: IMatrixElement): number {
  if (cellValue.value.includes('/')) {
    const divisionParts: string[] = cellValue.value.split('/');
    return Number(divisionParts[0]) / Number(divisionParts[1]);
  } else {
    return Number(cellValue.value);
  }
}

export function getMatrixLatexForm(matrix: IMatrixElement[][]): string {
  // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
  const rows: string[] = matrix.map((row: IMatrixElement[]) =>
    row
      .map((cell: IMatrixElement) =>
        decimalToFraction(getMatrixCellValue(cell))
      )
      .join(' & ')
  );
  const matrixBody: string = rows.join('\\\\ ');
  return `\\begin{pmatrix}${matrixBody}\\end{pmatrix}`;
}
