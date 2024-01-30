import Fraction from 'fraction.js';
import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
  getMatrixLatexForm,
  getResultWithAlgebrite,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoMatrizDiagonal extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getResultado(): string | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error('No se puede calcular la matriz diagonal de un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      const matrix: IMatrixElement[][] = JSON.parse(
        JSON.stringify(
          (this.operand.getResultado() as IMatrixElement[][]).map(
            (row: IMatrixElement[]) => row.map((element) => ({ ...element }))
          )
        )
      );

      const numRows = matrix.length;
      const numCols: number = matrix[0].length;

      for (let col: number = 0; col < numCols - 1; col++) {
        for (let row: number = col + 1; row < numRows; row++) {
          if (getMatrixCellValue(matrix[col][col]) !== '0') {
            let factor: string = getResultWithAlgebrite(
              `(${getMatrixCellValue(
                matrix[row][col]
              )}) / (${getMatrixCellValue(matrix[col][col])})`
            );
            if (factor !== '0') {
              for (let i = col; i < numCols; i++) {
                matrix[row][i].value = getResultWithAlgebrite(
                  `(${getMatrixCellValue(
                    matrix[row][i]
                  )}) - (${factor}) * (${getMatrixCellValue(matrix[col][i])})`
                );
              }

              factor = factor.replace(/\s/g, '');
              const fraction: Fraction = new Fraction(factor).simplify();

              const numerator: number = fraction.n;
              const denominator: number = fraction.d;

              const minusSign: string = factor.includes('-') ? '-' : '';
              let fractionString: string = `${numerator} \\over ${denominator}`;

              if (denominator === 1) {
                fractionString = numerator.toString();
              }
              const operationToShow: string = minusSign
                ? `+ $${fractionString}$`
                : `- $${fractionString}$`;
              this.intermediateSteps.push({
                description: `Se realiza la operación F$_{${row + 1}}$ = F$_{${
                  row + 1
                }}$ ${operationToShow} $*$ F$_{${col + 1}}$`,
                latexExpression: getMatrixLatexForm(matrix),
              });
            }
          }
        }
      }

      for (let col: number = numCols - 1; col > 0; col--) {
        for (let row: number = col - 1; row >= 0; row--) {
          if (getMatrixCellValue(matrix[col][col]) !== '0') {
            let factor: string = getResultWithAlgebrite(
              `(${getMatrixCellValue(
                matrix[row][col]
              )}) / (${getMatrixCellValue(matrix[col][col])})`
            );
            if (factor !== '0') {
              for (let i = col; i >= 0; i--) {
                matrix[row][i].value = getResultWithAlgebrite(
                  `(${getMatrixCellValue(
                    matrix[row][i]
                  )}) - (${factor}) * (${getMatrixCellValue(matrix[col][i])})`
                );
              }

              factor = factor.replace(/\s/g, '');
              const fraction: Fraction = new Fraction(factor).simplify();

              const numerator: number = fraction.n;
              const denominator: number = fraction.d;

              const minusSign: string = factor.includes('-') ? '-' : '';
              let fractionString: string = `${numerator} \\over ${denominator}`;

              if (denominator === 1) {
                fractionString = numerator.toString();
              }
              const operationToShow: string = minusSign
                ? `+ $${fractionString}$`
                : `- $${fractionString}$`;
              this.intermediateSteps.push({
                description: `Se realiza la operación F$_{${row + 1}}$ = F$_{${
                  row + 1
                }}$ ${operationToShow} $*$ F$_{${col + 1}}$`,
                latexExpression: getMatrixLatexForm(matrix),
              });
            }
          }
        }
      }

      for (let row: number = 0; row < numRows; row++) {
        let divisor: string = getMatrixCellValue(matrix[row][row]);
        if (divisor !== '0') {
          for (let col: number = 0; col < numCols; col++) {
            matrix[row][col].value = getResultWithAlgebrite(
              `(${getMatrixCellValue(matrix[row][col])}) / (${divisor})`
            );
          }

          divisor = divisor.replace(/\s/g, '');
          const fraction: Fraction = new Fraction(divisor).simplify();

          const numerator: number = fraction.n;
          const denominator: number = fraction.d;

          const minusSign: string = divisor.includes('-') ? '-' : '';
          let fractionString: string = `{${numerator} \\over ${denominator}}`;

          if (denominator === 1) {
            fractionString = numerator.toString();
          }
          const operationToShow: string = minusSign
            ? `$(-\{1 \\over ${fractionString}\})$`
            : `$\{1 \\over ${fractionString}\}$`;
          this.intermediateSteps.push({
            description: `Se realiza la operación F$_{${row + 1}}$ = F$_{${
              row + 1
            }}$ $*$ ${operationToShow}`,
            latexExpression: getMatrixLatexForm(matrix),
          });
        }
      }

      return matrix;
    }

    return null;
  }

  public override getLatexForm(): string {
    const latexForm: string =
      '\\text{matriz_diagonal}(' +
      this.getExpressionWithParentheses(`${this.operand.getLatexForm()}`) +
      ')';

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error('No se puede calcular la matriz diagonal de un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getDescription(): string {
    return `Se calcula la matriz diagonal de ${this.getDescriptionCommonText()}`;
  }

  public override getLatexFormResult(): string {
    const latexForm: string =
      '\\text{matriz_diagonal}(' +
      this.getExpressionWithParentheses(
        `${getCorrectFormToDisplay(this.operand)}`
      ) +
      ')';

    return latexForm;
  }
}
