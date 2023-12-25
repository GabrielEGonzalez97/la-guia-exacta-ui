import { getCorrectFormToDisplay } from '../../commonFunctions';
import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import { COS_TYPE, MATRIX_TYPE, NUMBER_TYPE } from '../constants';
import { TercetoAbstracto } from './TercetoAbstracto';
import { TercetoOperator } from './TercetoOperator';
import { IParentheses } from './interfaces';

export class TercetoUnary extends TercetoOperator {
  public operand: TercetoAbstracto;

  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, parentheses);
    this.operand = operand;
  }

  public override getTercetoForm(): string {
    return `${this.operator}, ${this.operand.getTercetoForm()}`;
  }

  public override getLatexForm(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    let latexForm: string = '';
    if (this.operator === COS_TYPE) {
      latexForm = `${leftParenthesis}\\cos(${getCorrectFormToDisplay(
        this.operand
      )})${rightParenthesis}`;
    }
    return latexForm;
  }

  private evaluateOperandsTypes(expectedType: string): boolean {
    return this.operand.getTercetoType() === expectedType;
  }

  public override getTercetoType(): string {
    if (this.operator === COS_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular el coseno de una matriz');
      }
    }
    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
    if (this.operator === COS_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return Math.cos(Number(this.operand.getResultado()));
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular el coseno de una matriz');
      }
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    let latexForm: string = '';

    if (this.operator === COS_TYPE) {
      latexForm = `${leftParenthesis}\\cos(${getCorrectFormToDisplay(
        this.operand
      )})${rightParenthesis}`;
    }
    return latexForm;
  }

  public override getLatexFormOperators(): string {
    return `$${this.operand.getLatexForm()}$`;
  }
}
