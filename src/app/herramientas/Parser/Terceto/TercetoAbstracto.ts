import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import { IParentheses } from './interfaces';

export abstract class TercetoAbstracto {
  public parentheses: IParentheses;

  constructor(parentheses: IParentheses) {
    this.parentheses = parentheses;
  }

  abstract getResultado(): number | IMatrixElement[][];
  abstract getTercetoForm(): string;
  abstract getLatexForm(): string;
  abstract getTercetoType(): string;

  protected getExpressionWithParentheses(
    expressionBetweenParentheses: string
  ): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    return `${leftParenthesis}${expressionBetweenParentheses}${rightParenthesis}`;
  }
}
