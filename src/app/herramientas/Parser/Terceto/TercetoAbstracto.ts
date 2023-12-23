import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import { IParentheses } from './interfaces';

export abstract class TercetoAbstracto {
  public parentheses: IParentheses;

  constructor(parentheses: IParentheses) {
    this.parentheses = parentheses;
  }

  abstract getTercetoForm(): string;
  abstract getResultado(): number | IMatrixElement[][];
  abstract getLatexForm(): string;
  abstract getTercetoType(): string;
}
