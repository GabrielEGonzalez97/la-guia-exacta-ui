import { getCorrectFormToDisplay } from 'src/app/herramientas/commonFunctions';
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

  abstract override getResultado(): number | IMatrixElement[][];
  abstract override getTercetoForm(): string;
  abstract override getLatexForm(): string;
  abstract override getTercetoType(): string;
  abstract getDescription(): string;
  abstract getLatexFormResult(): string;
  abstract getLatexFormOperators(): string;

  public getIntermediateSteps(): ICalculationStep[] {
    return this.intermediateSteps;
  }

  public getDescriptionCommonText(): string {
    const result: string = getCorrectFormToDisplay(this);
    const commonText: string = `${this.getLatexFormOperators()} dando como resultado $${result}$`;
    return commonText;
  }
}
