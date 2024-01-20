import { ICalculationStep } from '../../../operaciones-con-matrices/interfaces';
import { IMatrixElement } from '../../../operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../TercetoAbstracto';
import { IParentheses } from '../interfaces';

export abstract class TercetoOperator extends TercetoAbstracto {
  public operator: string;
  public intermediateSteps: ICalculationStep[] = [];

  constructor(operator: string, parentheses: IParentheses) {
    super(parentheses);
    this.operator = operator;
  }

  abstract override getTercetoForm(): string;
  abstract override getResultado(): number | IMatrixElement[][];
  abstract override getLatexForm(): string;
  abstract override getTercetoType(): string;
  abstract getLatexFormResult(): string;
  abstract getLatexFormOperators(): string;
  public getIntermediateSteps(): ICalculationStep[] {
    return this.intermediateSteps;
  }
}
