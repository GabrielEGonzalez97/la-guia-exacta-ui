import Fraction from 'fraction.js';
import 'nerdamer/Algebra.js';
import 'nerdamer/Calculus.js';
import 'nerdamer/Solve.js';
import nerdamer from 'nerdamer/nerdamer.core.js';
import { TercetoAbstracto } from './Parser/Terceto/TercetoAbstracto';
import {
  DETERMINANT_2_x_2_TYPE,
  DETERMINANT_FIFTH_COLUMN_TYPE,
  DETERMINANT_FIFTH_ROW_TYPE,
  DETERMINANT_FIRST_COLUMN_TYPE,
  DETERMINANT_FIRST_ROW_TYPE,
  DETERMINANT_FOURTH_COLUMN_TYPE,
  DETERMINANT_FOURTH_ROW_TYPE,
  DETERMINANT_SARRUS_TYPE,
  DETERMINANT_SECOND_COLUMN_TYPE,
  DETERMINANT_SECOND_ROW_TYPE,
  DETERMINANT_THIRD_COLUMN_TYPE,
  DETERMINANT_THIRD_ROW_TYPE,
  MATRIX_TYPE,
  MATRIZ_DIAGONAL,
  MATRIZ_INVERTIDA_TYPE,
  MATRIZ_TRANSPUESTA_TYPE,
  MATRIZ_TRIANGULAR_INFERIOR,
  MATRIZ_TRIANGULAR_SUPERIOR,
  NUMBER_TYPE,
  SQRT_TYPE,
} from './Parser/constants';
import { IMatrixElement } from './operaciones-con-matrices/matrix/interfaces';

var Algebrite = require('algebrite');

export function decimalToFraction(decimal: string): string {
  if (decimal !== null) {
    decimal = decimal.replace(/\s/g, '');

    const terms: string[] = decimal
      .split(/([+\-*/])/)
      .map((term) => term.trim())
      .filter((term) => term !== '');

    const fractionTerms: string[] = terms.map((term, index) => {
      if (['+', '*', '/'].includes(term) || (term === '-' && index === 0)) {
        return term;
      } else if (!isNaN(Number(term))) {
        const fraction: Fraction = new Fraction(term).simplify();
        return fraction.toLatex();
      } else if (term.includes('/')) {
        return term.replace('/', '\\over');
      } else {
        return term;
      }
    });

    return fractionTerms.join(' ');
  } else {
    return null;
  }
}

export function getMatrixCellValue(cellValue: IMatrixElement): string {
  if (cellValue.value.includes('/')) {
    const divisionParts: string[] = cellValue.value.split('/');
    return `${divisionParts[0]} / ${divisionParts[1]}`;
  } else if (cellValue.value === '') {
    return null;
  } else {
    return cellValue.value;
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

export function getDeterminanteMatrixLatexFormWithSpecificColor(
  matrix: IMatrixElement[][],
  color: string
): string {
  // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
  const rows: string[] = matrix.map((row: IMatrixElement[]) =>
    row
      .map(
        (cell: IMatrixElement) =>
          `\\textcolor{${color}}{${decimalToFraction(
            getMatrixCellValue(cell)
          )}}`
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
  const augmentedMatrix: IMatrixElement[][] =
    matrix.length === 2 ? augment2x2Matrix(matrix) : augment3x3Matrix(matrix);

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

function augment2x2Matrix(matrix: IMatrixElement[][]): IMatrixElement[][] {
  const augmentedMatrix: IMatrixElement[][] = [];
  const numRows = matrix.length;

  for (let i: number = 0; i < numRows; i++) {
    augmentedMatrix.push([
      { value: matrix[i][0].value },
      { value: '' },
      { value: matrix[i][1].value },
    ]);
    if (i < numRows - 1) {
      augmentedMatrix.push([{ value: '' }, { value: '*' }, { value: '' }]);
    }
  }

  return augmentedMatrix;
}

function augment3x3Matrix(matrix: IMatrixElement[][]): IMatrixElement[][] {
  const augmentedMatrix: IMatrixElement[][] = [];
  const numRows = matrix.length;

  for (let i: number = 0; i < numRows; i++) {
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

export function getDeterminanteColumnDevelopment(
  matrix: IMatrixElement[][],
  rowToMark: number,
  columnToMark: number
): string {
  const rows: string[] = matrix.map((row: IMatrixElement[], rowIndex: number) =>
    row
      .map((cell: IMatrixElement, colIndex: number) => {
        const markCell: boolean =
          rowToMark === rowIndex || columnToMark === colIndex;
        const colorCell: boolean =
          rowToMark === rowIndex && columnToMark === colIndex;
        let cellValue: string = decimalToFraction(getMatrixCellValue(cell));

        if (colorCell) {
          cellValue = `\\textcolor{blue}{${cellValue}}`;
        } else if (markCell) {
          cellValue = `\\cancel{${cellValue}}`;
        } else {
          cellValue = `\\textcolor{BrickRed}{${cellValue}}`;
        }

        return cellValue;
      })
      .join(' & ')
  );

  const matrixBody: string = rows.join('\\\\ ');

  return `\\begin{vmatrix}${matrixBody}\\end{vmatrix}`;
}

export function getSignsMatrix(
  size: number,
  rowToMark: number,
  columnToMark: number
): string {
  const matrix: string[][] = [];

  for (let i = 0; i < size; i++) {
    const row: string[] = [];
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        row.push('+1');
      } else {
        row.push('-1');
      }
    }
    matrix.push(row);
  }

  const rows: string[] = matrix.map((row: string[], rowIndex: number) =>
    row
      .map((cell: string, colIndex: number) => {
        if (rowIndex === rowToMark && colIndex === columnToMark) {
          return `\\textcolor{blue}{${cell}}`;
        } else {
          return cell;
        }
      })
      .join(' & ')
  );
  const matrixBody: string = rows.join('\\\\ ');
  return `\\begin{pmatrix}${matrixBody}\\end{pmatrix}`;
}

export function getMatrixLatexWithDecimalsForm(
  matrix: IMatrixElement[][]
): string {
  // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
  const rows: string[] = matrix.map((row: IMatrixElement[]) =>
    row.map((cell: IMatrixElement) => getMatrixCellValue(cell)).join(' & ')
  );
  const matrixBody: string = rows.join('\\\\ ');
  return `\\begin{pmatrix}${matrixBody}\\end{pmatrix}`;
}

export function getCorrectFormToDisplay(terceto: TercetoAbstracto): string {
  const type: string = terceto.getTercetoType();
  let result: string = '';
  if (type === NUMBER_TYPE) {
    result = decimalToFraction(terceto.getResultado().toString());
  } else if (type === MATRIX_TYPE) {
    result = getMatrixLatexForm(terceto.getResultado() as IMatrixElement[][]);
  }
  return result;
}

export function getResultWithAlgebrite(expressionToCalculate: string): string {
  const result: string = Algebrite.run(expressionToCalculate).split('...')[0];
  return Algebrite.float(result)
    .toString()
    .split('...')[0]
    .replace(/\.0(?![0-9])/g, '');
}

export function getHtmlTree(expression: string): string {
  expression = expression.replace(SQRT_TYPE, 'sqrt');
  expression = expression.replace(DETERMINANT_2_x_2_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_SARRUS_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_FIRST_COLUMN_TYPE, 'determinant');
  expression = expression.replace(
    DETERMINANT_SECOND_COLUMN_TYPE,
    'determinant'
  );
  expression = expression.replace(DETERMINANT_THIRD_COLUMN_TYPE, 'determinant');
  expression = expression.replace(
    DETERMINANT_FOURTH_COLUMN_TYPE,
    'determinant'
  );
  expression = expression.replace(DETERMINANT_FIFTH_COLUMN_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_FIRST_ROW_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_SECOND_ROW_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_THIRD_ROW_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_FOURTH_ROW_TYPE, 'determinant');
  expression = expression.replace(DETERMINANT_FIFTH_ROW_TYPE, 'determinant');
  expression = expression.replace(MATRIZ_INVERTIDA_TYPE, 'invert');
  expression = expression.replace(MATRIZ_TRANSPUESTA_TYPE, 'transpose');
  expression = expression.replace(MATRIZ_DIAGONAL, 'matrix');
  expression = expression.replace(MATRIZ_TRIANGULAR_SUPERIOR, 'matrix');
  expression = expression.replace(MATRIZ_TRIANGULAR_INFERIOR, 'matrix');
  return nerdamer.htmlTree(expression);
}

export function solveEquation(equation: string, letterToFind: string): string {
  return nerdamer.solve(equation, letterToFind).toString();
}
