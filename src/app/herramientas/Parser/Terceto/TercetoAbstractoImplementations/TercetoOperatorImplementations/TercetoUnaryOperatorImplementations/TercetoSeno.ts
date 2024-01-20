import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import { getCorrectFormToDisplay } from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoSeno extends TercetoUnaryOperator {
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
      return Math.sin(Number(this.operand.getResultado()));
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      throw new Error('No se puede calcular el seno de una matriz');
    }

    return null;
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `\\sin(${this.operand.getLatexForm()})`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      throw new Error('No se puede calcular el seno de una matriz');
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `\\sin(${getCorrectFormToDisplay(this.operand)})`
    );

    return latexForm;
  }
}
