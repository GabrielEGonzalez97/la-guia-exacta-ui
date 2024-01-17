import Fraction from 'fraction.js';
import { TercetoAbstracto } from './Parser/Terceto/TercetoAbstracto';
import { MATRIX_TYPE, NUMBER_TYPE } from './Parser/constants';
import { IMatrixElement } from './operaciones-con-matrices/matrix/interfaces';

export function decimalToFraction(decimal: number): string {
  if (decimal !== null) {
    const fraction: Fraction = new Fraction(decimal);

    const numerator: number = fraction.n;
    const denominator: number = fraction.d;

    const minusSign: string = decimal < 0 ? '-' : '';
    const fractionString: string = `${minusSign}{${numerator} \\over ${denominator}}`;

    if (denominator > 1) {
      return fractionString;
    }

    return `${minusSign}${numerator}`;
  } else {
    return null;
  }
}

export function getMatrixCellValue(cellValue: IMatrixElement): number {
  if (cellValue.value.includes('/')) {
    const divisionParts: string[] = cellValue.value.split('/');
    return Number(divisionParts[0]) / Number(divisionParts[1]);
  } else if (cellValue.value === '') {
    return null;
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

export function getDeterminanteMatrixLatexForm(
  matrix: IMatrixElement[][]
): string {
  // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
  const rows: string[] = matrix.map((row: IMatrixElement[]) =>
    row
      .map((cell: IMatrixElement) =>
        decimalToFraction(getMatrixCellValue(cell))
      )
      .join(' & ')
  );
  const matrixBody: string = rows.join('\\\\ ');
  return `\\begin{vmatrix}${matrixBody}\\end{vmatrix}`;
}

export function getDeterminanteMatrixLatexFormWithColors(
  matrix: IMatrixElement[][],
  highlightedCells: { row: number; col: number }[] = []
): string {
  const rows: string[] = matrix.map((row: IMatrixElement[], rowIndex: number) =>
    row
      .map((cell: IMatrixElement, colIndex: number) => {
        const cellValue = decimalToFraction(getMatrixCellValue(cell));
        const isHighlighted: boolean = highlightedCells.some(
          (coords) => coords.row === rowIndex && coords.col === colIndex
        );
        return isHighlighted ? `\\textcolor{blue}{${cellValue}}` : cellValue;
      })
      .join(' & ')
  );

  const matrixBody: string = rows.join('\\\\ ');

  return `\\begin{vmatrix}${matrixBody}\\end{vmatrix}`;
}

export function getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
  matrix: IMatrixElement[][],
  highlightedCells: { row: number; col: number; color: string }[] = [],
  typeOfArrow: string
): string {
  const augmentedMatrix: IMatrixElement[][] = augmentMatrix(matrix);

  const rows: string[] = augmentedMatrix.map(
    (row: IMatrixElement[], rowIndex: number) =>
      row
        .map((cell: IMatrixElement, colIndex: number) => {
          const highlightedCell = highlightedCells.find(
            (coords) => coords.row === rowIndex && coords.col === colIndex
          );
          let cellValue: string = '';
          if (highlightedCell && cell.value === '*') {
            cellValue = `\\${typeOfArrow}`;
          } else if (cell.value === '*') {
            cellValue = '';
          } else {
            cellValue = decimalToFraction(getMatrixCellValue(cell));
          }
          return highlightedCell
            ? `\\textcolor{${highlightedCell.color}}{{${cellValue}}}`
            : cellValue;
        })
        .join(' & ')
  );

  const matrixBody: string = rows.join('\\\\ ');

  return `\\begin{vmatrix}${matrixBody}\\end{vmatrix}`;
}

function augmentMatrix(matrix: IMatrixElement[][]): IMatrixElement[][] {
  const augmentedMatrix: IMatrixElement[][] = [];
  const numRows = matrix.length;

  for (let i = 0; i < numRows; i++) {
    augmentedMatrix.push([
      { value: matrix[i][0].value },
      { value: '' },
      { value: matrix[i][1].value },
      { value: '' },
      { value: matrix[i][2].value },
    ]);
    if (i < numRows - 1) {
      augmentedMatrix.push([
        { value: '' },
        { value: '*' },
        { value: '' },
        { value: '*' },
        { value: '' },
      ]);
    }
  }

  return augmentedMatrix;
}

export function getMatrixLatexWithDecimalsForm(
  matrix: IMatrixElement[][]
): string {
  // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
  const rows: string[] = matrix.map((row: IMatrixElement[]) =>
    row
      .map((cell: IMatrixElement) => getMatrixCellValue(cell).toString())
      .join(' & ')
  );
  const matrixBody: string = rows.join('\\\\ ');
  return `\\begin{pmatrix}${matrixBody}\\end{pmatrix}`;
}

export function getCorrectFormToDisplay(terceto: TercetoAbstracto): string {
  const type: string = terceto.getTercetoType();
  let result: string = '';
  if (type === NUMBER_TYPE) {
    result = decimalToFraction(Number(terceto.getResultado()));
  } else if (type === MATRIX_TYPE) {
    result = getMatrixLatexForm(terceto.getResultado() as IMatrixElement[][]);
  }
  return result;
}
