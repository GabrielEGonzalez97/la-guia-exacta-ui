import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getMatrixCellValue,
  getMatrixLatexForm,
  getResultWithAlgebrite,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoBinaryOperator } from '../TercetoBinaryOperator';

export class TercetoResta extends TercetoBinaryOperator {
  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand1, operand2, parentheses);
  }

  public override getResultado(): string | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return getResultWithAlgebrite(
        `(${this.operand1.getResultado()}) - (${this.operand2.getResultado()})`
      );
    } else if (
      this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE) ||
      this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)
    ) {
      throw new Error('No se puede restar un número y una matriz');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      const matrix1: IMatrixElement[][] =
        this.operand1.getResultado() as IMatrixElement[][];
      const matrix2: IMatrixElement[][] =
        this.operand2.getResultado() as IMatrixElement[][];
      const numberOfRowsOfMatrix1: number = matrix1.length;
      const numberOfColumnsOfMatrix1: number = matrix1[0].length;

      // Verificar que las matrices tengan las mismas dimensiones
      if (
        numberOfRowsOfMatrix1 !== matrix2.length ||
        numberOfColumnsOfMatrix1 !== matrix2[0].length
      ) {
        throw new Error(
          'Las matrices deben tener las mismas dimensiones para poder restarlas.'
        );
      }

      const resultado: IMatrixElement[][] = Array.from(
        { length: numberOfRowsOfMatrix1 },
        () =>
          Array(numberOfColumnsOfMatrix1)
            .fill(undefined)
            .map(() => ({ value: '' }))
      );

      for (let i: number = 0; i < numberOfRowsOfMatrix1; i++) {
        for (let j: number = 0; j < numberOfColumnsOfMatrix1; j++) {
          const valorMatriz1: string = getMatrixCellValue(matrix1[i][j]);
          const valorMatriz2: string = getMatrixCellValue(matrix2[i][j]);

          const resta: string = getResultWithAlgebrite(
            `(${valorMatriz1}) - (${valorMatriz2})`
          );
          resultado[i][j].value = resta;
          this.intermediateSteps.push({
            description: `Se calcula la resta entre las celdas [${i + 1}, ${
              j + 1
            }] de cada matriz (${valorMatriz1} y ${valorMatriz2}), siendo el resultado ${resta}. Se coloca el resultado en la celda [${
              i + 1
            }, ${j + 1}] de la matriz resultante.`,
            latexExpression: getMatrixLatexForm(resultado),
          });
        }
      }

      return resultado;
    }

    return null;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (
      this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE) ||
      this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)
    ) {
      throw new Error('No se puede restar un número y una matriz');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getDescription(): string {
    return `Se calcula la resta entre ${this.getDescriptionCommonText()}`;
  }
}
