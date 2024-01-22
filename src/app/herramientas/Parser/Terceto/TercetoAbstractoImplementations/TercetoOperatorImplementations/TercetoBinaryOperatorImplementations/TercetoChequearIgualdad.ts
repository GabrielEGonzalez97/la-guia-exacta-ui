import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
  getMatrixLatexForm,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoBinaryOperator } from '../TercetoBinaryOperator';

export class TercetoChequearIgualdad extends TercetoBinaryOperator {
  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand1, operand2, parentheses);
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      if (
        Number(this.operand1.getResultado()) ===
        Number(this.operand2.getResultado())
      ) {
        this.intermediateSteps.push({
          description: `${this.operand1.getResultado()} es igual a ${this.operand2.getResultado()}`,
          latexExpression: `${getCorrectFormToDisplay(
            this.operand1
          )} = ${getCorrectFormToDisplay(this.operand2)}`,
        });
        return Number(this.operand1.getResultado());
      } else {
        this.intermediateSteps.push({
          description: `${this.operand1.getResultado()} no es igual a ${this.operand2.getResultado()}`,
          latexExpression: `${getCorrectFormToDisplay(
            this.operand1
          )} \\neq ${getCorrectFormToDisplay(this.operand2)}`,
        });
        throw new Error('Los números no son iguales');
      }
    } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
      this.intermediateSteps.push({
        description: `${this.operand1.getResultado()} no es igual a ${this.operand2.getResultado()}`,
        latexExpression: `${getCorrectFormToDisplay(
          this.operand1
        )} \\neq ${getCorrectFormToDisplay(this.operand2)}`,
      });
      throw new Error('Un número no puede ser igual a una matriz');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
      this.intermediateSteps.push({
        description: `${this.operand1.getResultado()} no es igual a ${this.operand2.getResultado()}`,
        latexExpression: `${getCorrectFormToDisplay(
          this.operand1
        )} \\neq ${getCorrectFormToDisplay(this.operand2)}`,
      });
      throw new Error('Una matriz no puede ser igual a un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      const matrix1: IMatrixElement[][] =
        this.operand1.getResultado() as IMatrixElement[][];
      const matrix2: IMatrixElement[][] =
        this.operand2.getResultado() as IMatrixElement[][];

      const numRowsMatrix1 = matrix1.length;
      const numColsMatrix1: number = matrix1[0].length;
      const numRowsMatrix2 = matrix2.length;
      const numColsMatrix2: number = matrix2[0].length;

      if (numRowsMatrix1 !== numRowsMatrix2) {
        this.intermediateSteps.push({
          description: `El número de filas de la primera matriz (${numRowsMatrix1}) no coincide con el número de filas de la segunda matriz (${numRowsMatrix2})`,
          latexExpression: `${getCorrectFormToDisplay(
            this.operand1
          )} \\neq ${getCorrectFormToDisplay(this.operand2)}`,
        });
        throw new Error('Las matrices no tienen el mismo número de filas');
      }

      if (numColsMatrix1 !== numColsMatrix2) {
        this.intermediateSteps.push({
          description: `El número de columnas de la primera matriz (${numColsMatrix1}) no coincide con el número de columnas de la segunda matriz (${numColsMatrix2})`,
          latexExpression: `${getCorrectFormToDisplay(
            this.operand1
          )} \\neq ${getCorrectFormToDisplay(this.operand2)}`,
        });
        throw new Error('Las matrices no tienen el mismo número de columnas');
      }

      const resultado: IMatrixElement[][] = Array.from(
        { length: numRowsMatrix1 },
        () =>
          Array(numColsMatrix1)
            .fill(undefined)
            .map(() => ({ value: '' }))
      );

      for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
          if (matrix1[i][j].value !== matrix2[i][j].value) {
            this.intermediateSteps.push({
              description: `Las celdas [${i + 1}, ${
                j + 1
              }] de cada matriz (${getMatrixCellValue(
                matrix1[i][j]
              )} y ${getMatrixCellValue(matrix2[i][j])}) son diferentes`,
              latexExpression: `${getCorrectFormToDisplay(
                this.operand1
              )} \\neq ${getCorrectFormToDisplay(this.operand2)}`,
            });
            throw new Error('Las matrices son diferentes');
          } else {
            resultado[i][j].value = matrix1[i][j].value;
            this.intermediateSteps.push({
              description: `Las celdas [${i + 1}, ${
                j + 1
              }] de cada matriz (${getMatrixCellValue(
                matrix1[i][j]
              )} y ${getMatrixCellValue(matrix2[i][j])}) son iguales`,
              latexExpression: getMatrixLatexForm(resultado),
            });
          }
        }
      }

      return matrix1;
    }

    return null;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
      throw new Error('Un número no puede ser igual a una matriz');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
      throw new Error('Una matriz no puede ser igual a un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getDescription(): string {
    return `Se verifica la igualdad entre ${this.getDescriptionCommonText()}`;
  }
}
