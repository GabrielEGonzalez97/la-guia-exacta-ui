import { NUMBER_TYPE } from '../../constants';
import { TercetoAbstracto } from '../TercetoAbstracto';
import { IParentheses } from '../interfaces';

export class TercetoNumerico extends TercetoAbstracto {
  public number: number;

  constructor(number: number, parentheses: IParentheses) {
    super(parentheses);
    this.number = number;
  }

  public override getResultado(): number {
    return this.number;
  }

  public override getTercetoForm(): string {
    return this.number.toString();
  }

  public override getLatexForm(): string {
    return this.getExpressionWithParentheses(this.number.toString());
  }

  public override getTercetoType(): string {
    return NUMBER_TYPE;
  }
}
