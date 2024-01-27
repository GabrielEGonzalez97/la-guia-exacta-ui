import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getMatrixCellValue,
  getResultWithAlgebrite,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoBinaryOperator } from '../TercetoBinaryOperator';

export class TercetoMultiplicacion extends TercetoBinaryOperator {
  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand1, operand2, parentheses);
  }

  private multiplyNumberByMatrix(
    number: string,
    matrix: IMatrixElement[][]
  ): IMatrixElement[][] {
    const result: IMatrixElement[][] = [];

    for (let i = 0; i < matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        result[i][j] = {
          value: getResultWithAlgebrite(
            `(${getMatrixCellValue(matrix[i][j])}) * (${number})`
          ),
        };
      }
    }

    return result;
  }

  public override getResultado(): string | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return getResultWithAlgebrite(
        `(${this.operand1.getResultado()}) * (${this.operand2.getResultado()})`
      );
    } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
      return this.multiplyNumberByMatrix(
        this.operand1.getResultado().toString(),
        this.operand2.getResultado() as IMatrixElement[][]
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
      return this.multiplyNumberByMatrix(
        this.operand2.getResultado().toString(),
        this.operand1.getResultado() as IMatrixElement[][]
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      const matrix1: IMatrixElement[][] =
        this.operand1.getResultado() as IMatrixElement[][];
      const matrix2: IMatrixElement[][] =
        this.operand2.getResultado() as IMatrixElement[][];
      return this.multiplyMatrices(matrix1, matrix2);
    }

    return null;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (
      this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE) ||
      this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)
    ) {
      return MATRIX_TYPE;
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getDescription(): string {
    return `Se calcula la multiplicación entre ${this.getDescriptionCommonText()}`;
  }
}
