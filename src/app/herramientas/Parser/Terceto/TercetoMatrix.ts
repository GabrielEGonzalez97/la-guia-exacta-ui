import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import { MATRIX_TYPE } from '../constants';
import { TercetoAbstracto } from './TercetoAbstracto';
import { IParentheses } from './interfaces';

export class TercetoMatrix extends TercetoAbstracto {
  public matrix: IMatrixElement[][];

  constructor(matrix: IMatrixElement[][], parentheses: IParentheses) {
    super(parentheses);
    this.matrix = matrix;
  }

  public override getLatexForm(): string {
    // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    const rows: string[] = this.matrix.map((row: IMatrixElement[]) =>
      row.map((cell: IMatrixElement) => cell.value).join(' & ')
    );
    const matrixBody: string = rows.join('\\\\ ');
    return `${leftParenthesis}\\begin{pmatrix}${matrixBody}\\end{pmatrix}${rightParenthesis}`;
  }

  public override getResultado(): IMatrixElement[][] {
    return this.matrix;
  }

  public override getTercetoForm(): string {
    return JSON.stringify(this.matrix);
  }

  public override getTercetoType(): string {
    return MATRIX_TYPE;
  }
}
