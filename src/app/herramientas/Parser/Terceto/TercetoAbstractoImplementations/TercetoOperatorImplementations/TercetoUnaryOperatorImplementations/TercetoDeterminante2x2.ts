import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getDeterminanteMatrixLatexForm,
  getDeterminanteMatrixLatexFormWithMultiplicationsAndColors,
  getMatrixCellValue,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoDeterminante2x2 extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error('No se puede calcular el determinante de un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      if (!this.isSquareMatrix()) {
        throw new Error(
          'El determinante solo se puede calcular para matrices cuadradas'
        );
      }

      const matrix: IMatrixElement[][] = [
        ...(this.operand.getResultado() as IMatrixElement[][]).map(
          (row: IMatrixElement[]) => [...row]
        ),
      ];
      const size: number = matrix.length;

      if (size === 2) {
        const firstResult: number =
          getMatrixCellValue(matrix[0][0]) * getMatrixCellValue(matrix[1][1]);
        const secondResult: number =
          getMatrixCellValue(matrix[0][1]) * getMatrixCellValue(matrix[1][0]);
        const determinante: number = firstResult - secondResult;

        const highlightedCellsStep1 = [
          { row: 0, col: 0, color: 'NavyBlue' },
          { row: 1, col: 1, color: 'NavyBlue' },
          { row: 2, col: 2, color: 'NavyBlue' },
        ];
        this.intermediateSteps.push({
          description: `Se multiplican los números de igual color: ${matrix[0][0].value} * ${matrix[1][1].value} = ${firstResult}`,
          latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
            matrix,
            highlightedCellsStep1,
            'searrow'
          )}`,
        });

        const highlightedCellsStep2 = [
          { row: 0, col: 2, color: 'BrickRed' },
          { row: 1, col: 1, color: 'BrickRed' },
          { row: 2, col: 0, color: 'BrickRed' },
        ];
        this.intermediateSteps.push({
          description: `Se multiplican los números de igual color: ${matrix[0][1].value} * ${matrix[1][0].value} = ${secondResult}`,
          latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
            matrix,
            highlightedCellsStep2,
            'swarrow'
          )}`,
        });

        this.intermediateSteps.push({
          description: `Se realiza la resta entre lo obtenido en los dos pasos anteriores, dando como resultado ${determinante}`,
          latexExpression: `\\text{det} = ${firstResult} - ${secondResult} = ${determinante}`,
        });
        return determinante;
      } else {
        throw new Error('Este método solo se aplica a matrices 2x2');
      }
    }

    return null;
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error('No se puede calcular el determinante de un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      return NUMBER_TYPE;
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}`
    );

    return latexForm;
  }
}
