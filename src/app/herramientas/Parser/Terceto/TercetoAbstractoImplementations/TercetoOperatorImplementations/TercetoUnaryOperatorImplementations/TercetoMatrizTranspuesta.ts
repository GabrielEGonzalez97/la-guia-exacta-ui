import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getCorrectFormToDisplay,
  getMatrixLatexForm,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoMatrizTranspuesta extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${this.operand.getLatexForm()}^{T}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error(
        'No se puede calcular la matriz transpuesta de un número'
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error(
        'No se puede calcular la matriz transpuesta de un número'
      );
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      const matriz: IMatrixElement[][] =
        this.operand.getResultado() as IMatrixElement[][];
      const filas: number = matriz.length;
      const columnas: number = matriz[0].length;

      // Crear una nueva matriz con las filas y columnas intercambiadas
      const matrizTranspuesta: IMatrixElement[][] = Array.from(
        { length: columnas },
        () => Array.from({ length: filas }, () => ({ value: '' }))
      );

      for (let i: number = 0; i < filas; i++) {
        for (let j: number = 0; j < columnas; j++) {
          matrizTranspuesta[j][i] = matriz[i][j];
        }
        this.intermediateSteps.push({
          description: `Se coloca la fila ${i + 1} de la matriz en la columna ${
            i + 1
          } de la matriz resultante.`,
          latexExpression: getMatrixLatexForm(matrizTranspuesta),
        });
      }

      return matrizTranspuesta;
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getCorrectFormToDisplay(this.operand)}^{T}`
    );

    return latexForm;
  }
}
