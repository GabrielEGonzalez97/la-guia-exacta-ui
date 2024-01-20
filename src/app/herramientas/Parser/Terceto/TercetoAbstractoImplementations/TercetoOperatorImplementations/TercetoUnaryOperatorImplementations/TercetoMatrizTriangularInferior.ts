import Fraction from 'fraction.js';
import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
  getMatrixLatexForm,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoMatrizTriangularInferior extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${this.operand.getLatexForm()}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error(
        'No se puede calcular la matriz triangular inferior de un número'
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error(
        'No se puede calcular la matriz triangular inferior de un número'
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      const matrix: IMatrixElement[][] = JSON.parse(
        JSON.stringify(
          (this.operand.getResultado() as IMatrixElement[][]).map(
            (row: IMatrixElement[]) => row.map((element) => ({ ...element }))
          )
        )
      );

      const numCols: number = matrix[0].length;

      for (let col: number = numCols - 1; col > 0; col--) {
        for (let row: number = col - 1; row >= 0; row--) {
          const factor: number =
            getMatrixCellValue(matrix[row][col]) /
            getMatrixCellValue(matrix[col][col]);
          for (let i = col; i >= 0; i--) {
            matrix[row][i].value = (
              getMatrixCellValue(matrix[row][i]) -
              factor * getMatrixCellValue(matrix[col][i])
            ).toString();
          }

          const fraction: Fraction = new Fraction(factor);

          const numerator: number = fraction.n;
          const denominator: number = fraction.d;

          const minusSign: string = factor < 0 ? '-' : '';
          let fractionString: string = `${numerator} \\over ${denominator}`;

          if (denominator === 1) {
            fractionString = numerator.toString();
          }
          const operationToShow: string = minusSign
            ? `+ $${fractionString}$`
            : `- $${fractionString}$`;
          this.intermediateSteps.push({
            description: `Se realiza la operación F${row + 1} = F${
              row + 1
            } ${operationToShow} $*$ F${col + 1}`,
            latexExpression: getMatrixLatexForm(matrix),
          });
        }
      }

      return matrix;
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getCorrectFormToDisplay(this.operand)}`
    );

    return latexForm;
  }
}
