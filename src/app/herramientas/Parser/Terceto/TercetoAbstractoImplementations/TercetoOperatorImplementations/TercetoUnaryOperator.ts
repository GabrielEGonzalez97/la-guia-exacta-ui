import { all, create } from 'mathjs';
const math = create(all);

import { getCorrectFormToDisplay } from '../../../../commonFunctions';
import { IMatrixElement } from '../../../../operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../TercetoAbstracto';
import { IParentheses } from '../../interfaces';
import { TercetoOperator } from '../TercetoOperator';

export abstract class TercetoUnaryOperator extends TercetoOperator {
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

  public override getLatexFormOperators(): string {
    return `$${getCorrectFormToDisplay(this.operand)}$`;
  }

  public abstract override getResultado(): number | IMatrixElement[][];
  public abstract override getLatexForm(): string;
  public abstract override getTercetoType(): string;
  public abstract override getLatexFormResult(): string;

  protected evaluateOperandsTypes(expectedType: string): boolean {
    return this.operand.getTercetoType() === expectedType;
  }

  protected isSquareMatrix(): boolean {
    const matrix: IMatrixElement[][] =
      this.operand.getResultado() as IMatrixElement[][];
    const rows: number = matrix.length;
    const columns: number = matrix[0].length;

    return rows === columns;
  }
}
