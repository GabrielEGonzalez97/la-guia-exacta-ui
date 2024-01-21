import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
  getMatrixLatexForm,
} from '../../../../commonFunctions';
import { IMatrixElement } from '../../../../operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../TercetoAbstracto';
import { IParentheses } from '../../interfaces';
import { TercetoOperator } from '../TercetoOperator';

export abstract class TercetoBinaryOperator extends TercetoOperator {
  public operand1: TercetoAbstracto;
  public operand2: TercetoAbstracto;

  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, parentheses);
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  public abstract override getResultado(): number | IMatrixElement[][];
  public abstract override getTercetoType(): string;

  public override getTercetoForm(): string {
    return `${this.operator},
              ${this.operand1.getTercetoForm()},
              ${this.operand2.getTercetoForm()}`;
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${this.operand1.getLatexForm()} ${
        this.operator
      } ${this.operand2.getLatexForm()}`
    );

    return latexForm;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getCorrectFormToDisplay(this.operand1)} ${
        this.operator
      } ${getCorrectFormToDisplay(this.operand2)}`
    );

    return latexForm;
  }

  public override getLatexFormOperators(): string {
    const operand1Result: string = getCorrectFormToDisplay(
      this.operand1 as TercetoBinaryOperator
    );
    const operand2Result: string = getCorrectFormToDisplay(
      this.operand2 as TercetoBinaryOperator
    );

    return `$${operand1Result}$ y $${operand2Result}$`;
  }

  protected evaluateOperandsTypes(
    expectedType1: string,
    expectedType2: string
  ): boolean {
    return (
      this.operand1.getTercetoType() === expectedType1 &&
      this.operand2.getTercetoType() === expectedType2
    );
  }

  protected multiplyMatrices(
    matrix1: IMatrixElement[][],
    matrix2: IMatrixElement[][]
  ): IMatrixElement[][] {
    const numberOfRowsOfMatrix1: number = matrix1.length;
    const numberOfColumnsOfMatrix1: number = matrix1[0].length;
    const numberOfRowsOfMatrix2: number = matrix2.length;
    const numberOfColumnsOfMatrix2: number = matrix2[0].length;

    if (numberOfColumnsOfMatrix1 !== numberOfRowsOfMatrix2) {
      throw new Error(
        'El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz para poder multiplicarlas.'
      );
    }

    const resultado: IMatrixElement[][] = Array.from(
      { length: numberOfRowsOfMatrix1 },
      () =>
        Array(numberOfColumnsOfMatrix2)
          .fill(undefined)
          .map(() => ({ value: '' }))
    );

    let intermediateCalculations: string[] = [];
    for (let i = 0; i < numberOfRowsOfMatrix1; i++) {
      for (let j = 0; j < numberOfColumnsOfMatrix2; j++) {
        let suma: number = 0;
        intermediateCalculations = [];
        for (let k = 0; k < numberOfColumnsOfMatrix1; k++) {
          const valorMatriz1: number = getMatrixCellValue(matrix1[i][k]);
          const valorMatriz2: number = getMatrixCellValue(matrix2[k][j]);
          intermediateCalculations.push(`${valorMatriz1} * ${valorMatriz2}`);

          suma += valorMatriz1 * valorMatriz2;
        }
        resultado[i][j].value = getMatrixCellValue({
          value: suma.toString(),
        }).toString();
        this.intermediateSteps.push({
          description: `Se multiplica la fila ${
            i + 1
          } de la primera matriz por la columna ${
            j + 1
          } de la segunda matriz (${intermediateCalculations.join(
            ' + '
          )}), siendo el resultado ${
            resultado[i][j].value
          }. Se coloca el resultado en la celda [${i + 1}, ${
            j + 1
          }] de la matriz resultante.`,
          latexExpression: getMatrixLatexForm(resultado),
        });
      }
    }

    return resultado;
  }
}
