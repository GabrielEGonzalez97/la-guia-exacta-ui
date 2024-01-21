import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoBinaryOperator } from '../TercetoBinaryOperator';

export class TercetoDivision extends TercetoBinaryOperator {
  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand1, operand2, parentheses);
  }

  private divideNumberByMatrix(
    number: number,
    matrix: IMatrixElement[][]
  ): IMatrixElement[][] {
    if (number === 0) {
      throw new Error('No se puede dividir por cero');
    }

    const result: IMatrixElement[][] = [];

    for (let i = 0; i < matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        result[i][j] = {
          value: (getMatrixCellValue(matrix[i][j]) / number).toString(),
        };
      }
    }

    return result;
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      if (Number(this.operand2.getResultado()) === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return (
        Number(this.operand1.getResultado()) /
        Number(this.operand2.getResultado())
      );
    } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
      throw new Error('No se puede dividir un número por una matriz');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
      return this.divideNumberByMatrix(
        Number(this.operand2.getResultado()),
        this.operand1.getResultado() as IMatrixElement[][]
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      throw new Error('No se puede dividir dos matrices con esta calculadora');
    }

    return null;
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `{${this.operand1.getLatexForm()} \\over ${this.operand2.getLatexForm()}}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
      throw new Error('No se puede dividir un número por una matriz');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
      return MATRIX_TYPE;
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      throw new Error('No se puede dividir dos matrices con esta calculadora');
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `{${getCorrectFormToDisplay(
        this.operand1
      )} \\over ${getCorrectFormToDisplay(this.operand2)}}`
    );

    return latexForm;
  }
}
