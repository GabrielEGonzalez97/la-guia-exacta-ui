import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import { getCorrectFormToDisplay } from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoRaizCuadrada extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getLatexForm(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    const latexForm: string = `${leftParenthesis}\\sqrt{${this.operand.getLatexForm()}}${rightParenthesis}`;

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      throw new Error('No se puede calcular la raíz de una matriz');
    }

    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      return Math.sqrt(Number(this.operand.getResultado()));
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      throw new Error('No se puede calcular la raíz de una matriz');
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    const latexForm: string = `${leftParenthesis}\\sqrt{${getCorrectFormToDisplay(
      this.operand
    )}}${rightParenthesis}`;

    return latexForm;
  }
}
