import { getMatrixLatexForm } from '../../../commonFunctions';
import { IMatrixElement } from '../../../operaciones-con-matrices/matrix/interfaces';
import { MATRIX_TYPE } from '../../constants';
import { TercetoAbstracto } from '../TercetoAbstracto';
import { IParentheses } from '../interfaces';

export class TercetoMatrix extends TercetoAbstracto {
  public matrix: IMatrixElement[][];

  constructor(matrix: IMatrixElement[][], parentheses: IParentheses) {
    super(parentheses);
    this.matrix = matrix;
  }

  public override getResultado(): IMatrixElement[][] {
    return this.matrix;
  }

  public override getLatexForm(): string {
    const matrixBody: string = getMatrixLatexForm(this.matrix);
    return this.getExpressionWithParentheses(matrixBody);
  }

  public override getTercetoForm(): string {
    return JSON.stringify(this.matrix);
  }

  public override getTercetoType(): string {
    return MATRIX_TYPE;
  }
}
