import { all, create } from 'mathjs';
const math = create(all);

import Fraction from 'fraction.js';
import {
  getCorrectFormToDisplay,
  getDeterminanteMatrixLatexForm,
  getDeterminanteMatrixLatexFormWithColors,
  getDeterminanteMatrixLatexFormWithMultiplicationsAndColors,
  getMatrixCellValue,
  getMatrixLatexForm,
} from '../../commonFunctions';
import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import {
  COS_TYPE,
  DETERMINANTE_2_x_2_TYPE,
  MATRIX_TYPE,
  MATRIZ_TRIANGULAR_SUPERIOR,
  MAT_INV_TYPE,
  NUMBER_TYPE,
  SARRUS_TYPE,
  SIN_TYPE,
  SQRT_TYPE,
  TAN_TYPE,
  TRANSPUESTA_TYPE,
} from '../constants';
import { TercetoAbstracto } from './TercetoAbstracto';
import { TercetoOperator } from './TercetoOperator';
import { IParentheses } from './interfaces';

export class TercetoUnary extends TercetoOperator {
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

  public override getLatexForm(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    let latexForm: string = '';
    if (this.operator === COS_TYPE) {
      latexForm = `${leftParenthesis}\\cos(${this.operand.getLatexForm()})${rightParenthesis}`;
    } else if (this.operator === SIN_TYPE) {
      latexForm = `${leftParenthesis}\\sin(${this.operand.getLatexForm()})${rightParenthesis}`;
    } else if (this.operator === TAN_TYPE) {
      latexForm = `${leftParenthesis}\\tan(${this.operand.getLatexForm()})${rightParenthesis}`;
    } else if (this.operator === SQRT_TYPE) {
      latexForm = `${leftParenthesis}\\sqrt{${this.operand.getLatexForm()}}${rightParenthesis}`;
    } else if (this.operator === MAT_INV_TYPE) {
      latexForm = `${leftParenthesis}${this.operand.getLatexForm()}^{-1}${rightParenthesis}`;
    } else if (this.operator === TRANSPUESTA_TYPE) {
      latexForm = `${leftParenthesis}${this.operand.getLatexForm()}^{T}${rightParenthesis}`;
    } else if (this.operator === DETERMINANTE_2_x_2_TYPE) {
      latexForm = `${leftParenthesis}${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}${rightParenthesis}`;
    } else if (this.operator === SARRUS_TYPE) {
      latexForm = `${leftParenthesis}${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}${rightParenthesis}`;
    } else if (this.operator === MATRIZ_TRIANGULAR_SUPERIOR) {
      latexForm = `${leftParenthesis}${this.operand.getLatexForm()}${rightParenthesis}`;
    }
    return latexForm;
  }

  private evaluateOperandsTypes(expectedType: string): boolean {
    return this.operand.getTercetoType() === expectedType;
  }

  public override getTercetoType(): string {
    if (this.operator === COS_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular el coseno de una matriz');
      }
    } else if (this.operator === SIN_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular el seno de una matriz');
      }
    } else if (this.operator === TAN_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular la tangente de una matriz');
      }
    } else if (this.operator === SQRT_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular la raíz de una matriz');
      }
    } else if (this.operator === MAT_INV_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular la matriz inversa de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === TRANSPUESTA_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error(
          'No se puede calcular la matriz transpuesta de un número'
        );
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === DETERMINANTE_2_x_2_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular el determinante de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        return NUMBER_TYPE;
      }
    } else if (this.operator === SARRUS_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular el determinante de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        return NUMBER_TYPE;
      }
    } else if (this.operator === MATRIZ_TRIANGULAR_SUPERIOR) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error(
          'No se puede calcular la matriz triangular superior de un número'
        );
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    }
    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
    if (this.operator === COS_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return Math.cos(Number(this.operand.getResultado()));
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular el coseno de una matriz');
      }
    } else if (this.operator === SIN_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return Math.sin(Number(this.operand.getResultado()));
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular el seno de una matriz');
      }
    } else if (this.operator === TAN_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return Math.tan(Number(this.operand.getResultado()));
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular la tangente de una matriz');
      }
    } else if (this.operator === SQRT_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        return Math.sqrt(Number(this.operand.getResultado()));
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        throw new Error('No se puede calcular la raíz de una matriz');
      }
    } else if (this.operator === MAT_INV_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular la matriz inversa de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        const matriz: IMatrixElement[][] =
          this.operand.getResultado() as IMatrixElement[][];
        const filas: number = matriz.length;
        const columnas: number = matriz[0].length;

        if (filas !== columnas) {
          throw new Error(
            'La matriz no es cuadrada. No se puede calcular la matriz inversa.'
          );
        }

        // Convertir la matriz de IMatrixElement a una matriz numérica
        const matrizNumerica: number[][] = matriz.map((row: IMatrixElement[]) =>
          row.map((element: IMatrixElement) => parseFloat(element.value))
        );

        // Crear una matriz identidad del mismo tamaño
        const matrizIdentidad: number[][] = Array.from(
          { length: filas },
          (_, i) => Array.from({ length: filas }, (_, j) => (i === j ? 1 : 0))
        );

        // Concatenar la matriz original y la matriz identidad para aplicar eliminación gaussiana
        const matrizExtendida: number[][] = matrizNumerica.map(
          (row: number[], rowIndex: number) =>
            row.concat(matrizIdentidad[rowIndex])
        );

        // Implementar eliminación gaussiana para convertir la parte izquierda a la matriz identidad
        for (let i: number = 0; i < filas; i++) {
          // Hacer que el pivote sea 1
          const pivote: number = matrizExtendida[i][i];
          if (pivote === 0) {
            throw new Error(
              'La matriz no es invertible. No se puede calcular la matriz inversa.'
            );
          }

          for (let j = 0; j < 2 * filas; j++) {
            matrizExtendida[i][j] /= pivote;
          }

          // Hacer ceros en otras filas
          for (let k: number = 0; k < filas; k++) {
            if (k !== i) {
              const factor = matrizExtendida[k][i];
              for (let j: number = 0; j < 2 * filas; j++) {
                matrizExtendida[k][j] -= factor * matrizExtendida[i][j];
              }
            }
          }
        }

        // Extraer la parte derecha que ahora debería ser la matriz inversa
        const matrizInversaNumerica = matrizExtendida.map((row: number[]) =>
          row.slice(filas)
        );

        // Convertir la matriz inversa numérica a una matriz de IMatrixElement
        const matrizInversa: IMatrixElement[][] = matrizInversaNumerica.map(
          (row: number[]) =>
            row.map((element: number) => ({ value: element.toString() }))
        );

        return matrizInversa;
      }
    } else if (this.operator === TRANSPUESTA_TYPE) {
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
            description: `Se coloca la fila ${
              i + 1
            } de la matriz en la columna ${i + 1} de la matriz resultante.`,
            latexExpression: getMatrixLatexForm(matrizTranspuesta),
          });
        }

        return matrizTranspuesta;
      }
    } else if (this.operator === DETERMINANTE_2_x_2_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular el determinante de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        if (!this.isSquareMatrix()) {
          throw new Error(
            'El determinante solo se puede calcular para matrices cuadradas'
          );
        }

        const matrix: IMatrixElement[][] = [
          ...(this.operand.getResultado() as IMatrixElement[][]).map(
            (row: IMatrixElement[]) => [...row]
          ),
        ];
        const size: number = matrix.length;

        if (size === 2) {
          const firstResult: number =
            getMatrixCellValue(matrix[0][0]) * getMatrixCellValue(matrix[1][1]);
          const secondResult: number =
            getMatrixCellValue(matrix[0][1]) * getMatrixCellValue(matrix[1][0]);
          const determinante: number = firstResult - secondResult;

          const highlightedCellsStep1 = [
            { row: 0, col: 0, color: 'NavyBlue' },
            { row: 1, col: 1, color: 'NavyBlue' },
            { row: 2, col: 2, color: 'NavyBlue' },
          ];
          this.intermediateSteps.push({
            description: `Se multiplican los números de igual color: ${matrix[0][0].value} * ${matrix[1][1].value} = ${firstResult}`,
            latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
              matrix,
              highlightedCellsStep1,
              'searrow'
            )}`,
          });

          const highlightedCellsStep2 = [
            { row: 0, col: 2, color: 'BrickRed' },
            { row: 1, col: 1, color: 'BrickRed' },
            { row: 2, col: 0, color: 'BrickRed' },
          ];
          this.intermediateSteps.push({
            description: `Se multiplican los números de igual color: ${matrix[0][1].value} * ${matrix[1][0].value} = ${secondResult}`,
            latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
              matrix,
              highlightedCellsStep2,
              'swarrow'
            )}`,
          });

          this.intermediateSteps.push({
            description: `Se realiza la resta entre lo obtenido en los dos pasos anteriores, dando como resultado ${determinante}`,
            latexExpression: `\\text{det} = ${firstResult} - ${secondResult} = ${determinante}`,
          });
          return determinante;
        } else {
          throw new Error('Este método solo se aplica a matrices 2x2');
        }
      }
    } else if (this.operator === SARRUS_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular el determinante de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        if (!this.isSquareMatrix()) {
          throw new Error(
            'El determinante solo se puede calcular para matrices cuadradas'
          );
        }

        const matrix: IMatrixElement[][] = [
          ...(this.operand.getResultado() as IMatrixElement[][]).map(
            (row: IMatrixElement[]) => [...row]
          ),
        ];
        const size: number = matrix.length;

        if (size === 3) {
          matrix.push([matrix[0][0], matrix[0][1], matrix[0][2]]);
          matrix.push([matrix[1][0], matrix[1][1], matrix[1][2]]);

          const highlightedCellsStep1 = [
            { row: 3, col: 0 },
            { row: 3, col: 1 },
            { row: 3, col: 2 },
            { row: 4, col: 0 },
            { row: 4, col: 1 },
            { row: 4, col: 2 },
          ];
          this.intermediateSteps.push({
            description:
              'Se agregan dos filas al final repitiendo el contenido de las dos primeras filas',
            latexExpression: `${getDeterminanteMatrixLatexFormWithColors(
              matrix,
              highlightedCellsStep1
            )}`,
          });

          const firstMultiplicationValue: number =
            getMatrixCellValue(matrix[0][0]) *
            getMatrixCellValue(matrix[1][1]) *
            getMatrixCellValue(matrix[2][2]);

          const secondMultiplicationValue: number =
            getMatrixCellValue(matrix[0][2]) *
            getMatrixCellValue(matrix[1][0]) *
            getMatrixCellValue(matrix[2][1]);

          const thirdMultiplicationValue: number =
            getMatrixCellValue(matrix[0][1]) *
            getMatrixCellValue(matrix[1][2]) *
            getMatrixCellValue(matrix[2][0]);

          const fourthMultiplicationValue: number =
            getMatrixCellValue(matrix[0][2]) *
            getMatrixCellValue(matrix[1][1]) *
            getMatrixCellValue(matrix[2][0]);

          const fifthMultiplicationValue: number =
            getMatrixCellValue(matrix[0][0]) *
            getMatrixCellValue(matrix[1][2]) *
            getMatrixCellValue(matrix[2][1]);

          const sixthMultiplicationValue: number =
            getMatrixCellValue(matrix[0][1]) *
            getMatrixCellValue(matrix[1][0]) *
            getMatrixCellValue(matrix[2][2]);

          const highlightedCellsStep2 = [
            { row: 0, col: 0, color: 'NavyBlue' },
            { row: 1, col: 1, color: 'NavyBlue' },
            { row: 2, col: 2, color: 'NavyBlue' },
            { row: 3, col: 3, color: 'NavyBlue' },
            { row: 4, col: 4, color: 'NavyBlue' },
            { row: 2, col: 0, color: 'teal' },
            { row: 3, col: 1, color: 'teal' },
            { row: 4, col: 2, color: 'teal' },
            { row: 5, col: 3, color: 'teal' },
            { row: 6, col: 4, color: 'teal' },
            { row: 4, col: 0, color: 'blueViolet' },
            { row: 5, col: 1, color: 'blueViolet' },
            { row: 6, col: 2, color: 'blueViolet' },
            { row: 7, col: 3, color: 'blueViolet' },
            { row: 8, col: 4, color: 'blueViolet' },
          ];
          this.intermediateSteps.push({
            description:
              'Se multiplican los números de igual color y a lo obtenido se le suma el resultado de la multiplicación de los números del siguiente color',
            latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
              matrix,
              highlightedCellsStep2,
              'searrow'
            )}`,
            intermediateSteps: [
              {
                description: `Se realiza la multiplicación ${getMatrixCellValue(
                  matrix[0][0]
                )} * ${getMatrixCellValue(matrix[1][1])} * ${getMatrixCellValue(
                  matrix[2][2]
                )} dando como resultado ${firstMultiplicationValue}`,
                latexExpression: `\\textcolor{NavyBlue}{${getMatrixCellValue(
                  matrix[0][0]
                )} * ${getMatrixCellValue(matrix[1][1])} * ${getMatrixCellValue(
                  matrix[2][2]
                )} = ${firstMultiplicationValue}}`,
              },
              {
                description: `Se realiza la multiplicación ${getMatrixCellValue(
                  matrix[1][0]
                )} * ${getMatrixCellValue(matrix[2][1])} * ${getMatrixCellValue(
                  matrix[0][2]
                )} dando como resultado ${secondMultiplicationValue}`,
                latexExpression: `\\textcolor{teal}{${getMatrixCellValue(
                  matrix[1][0]
                )} * ${getMatrixCellValue(matrix[2][1])} * ${getMatrixCellValue(
                  matrix[0][2]
                )} = ${secondMultiplicationValue}}`,
              },
              {
                description: `Se realiza la multiplicación ${getMatrixCellValue(
                  matrix[2][0]
                )} * ${getMatrixCellValue(matrix[0][1])} * ${getMatrixCellValue(
                  matrix[1][2]
                )} dando como resultado ${thirdMultiplicationValue}`,
                latexExpression: `\\textcolor{blueViolet}{${getMatrixCellValue(
                  matrix[2][0]
                )} * ${getMatrixCellValue(matrix[0][1])} * ${getMatrixCellValue(
                  matrix[1][2]
                )} = ${thirdMultiplicationValue}}`,
              },
              {
                description: `Se suman los resultados obtenidos`,
                latexExpression: `\\textcolor{NavyBlue}{${firstMultiplicationValue}} + \\textcolor{teal}{${secondMultiplicationValue}} + \\textcolor{blueViolet}{${thirdMultiplicationValue}} = ${
                  firstMultiplicationValue +
                  secondMultiplicationValue +
                  thirdMultiplicationValue
                }`,
              },
            ],
          });

          const highlightedCellsStep3 = [
            { row: 0, col: 4, color: 'BrickRed' },
            { row: 1, col: 3, color: 'BrickRed' },
            { row: 2, col: 2, color: 'BrickRed' },
            { row: 3, col: 1, color: 'BrickRed' },
            { row: 4, col: 0, color: 'BrickRed' },
            { row: 2, col: 4, color: 'BurntOrange' },
            { row: 3, col: 3, color: 'BurntOrange' },
            { row: 4, col: 2, color: 'BurntOrange' },
            { row: 5, col: 1, color: 'BurntOrange' },
            { row: 6, col: 0, color: 'BurntOrange' },
            { row: 4, col: 4, color: 'Dandelion' },
            { row: 5, col: 3, color: 'Dandelion' },
            { row: 6, col: 2, color: 'Dandelion' },
            { row: 7, col: 1, color: 'Dandelion' },
            { row: 8, col: 0, color: 'Dandelion' },
          ];

          this.intermediateSteps.push({
            description:
              'Se multiplican los números de igual color y a lo obtenido se le suma el resultado de la multiplicación de los números del siguiente color',
            latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
              matrix,
              highlightedCellsStep3,
              'swarrow'
            )}`,
            intermediateSteps: [
              {
                description: `Se realiza la multiplicación ${getMatrixCellValue(
                  matrix[0][2]
                )} * ${getMatrixCellValue(matrix[1][1])} * ${getMatrixCellValue(
                  matrix[2][0]
                )} dando como resultado ${fourthMultiplicationValue}`,
                latexExpression: `\\textcolor{BrickRed}{${getMatrixCellValue(
                  matrix[0][2]
                )} * ${getMatrixCellValue(matrix[1][1])} * ${getMatrixCellValue(
                  matrix[2][0]
                )} = ${fourthMultiplicationValue}}`,
              },
              {
                description: `Se realiza la multiplicación ${getMatrixCellValue(
                  matrix[1][2]
                )} * ${getMatrixCellValue(matrix[2][1])} * ${getMatrixCellValue(
                  matrix[0][0]
                )} dando como resultado ${fifthMultiplicationValue}`,
                latexExpression: `\\textcolor{BurntOrange}{${getMatrixCellValue(
                  matrix[1][2]
                )} * ${getMatrixCellValue(matrix[2][1])} * ${getMatrixCellValue(
                  matrix[0][0]
                )} = ${fifthMultiplicationValue}}`,
              },
              {
                description: `Se realiza la multiplicación ${getMatrixCellValue(
                  matrix[2][2]
                )} * ${getMatrixCellValue(matrix[0][1])} * ${getMatrixCellValue(
                  matrix[1][0]
                )} dando como resultado ${sixthMultiplicationValue}`,
                latexExpression: `\\textcolor{Dandelion}{${getMatrixCellValue(
                  matrix[2][2]
                )} * ${getMatrixCellValue(matrix[0][1])} * ${getMatrixCellValue(
                  matrix[1][0]
                )} = ${sixthMultiplicationValue}}`,
              },
              {
                description: `Se suman los resultados obtenidos`,
                latexExpression: `\\textcolor{BrickRed}{${fourthMultiplicationValue}} + \\textcolor{BurntOrange}{${fifthMultiplicationValue}} + \\textcolor{Dandelion}{${sixthMultiplicationValue}} = ${
                  fourthMultiplicationValue +
                  fifthMultiplicationValue +
                  sixthMultiplicationValue
                }`,
              },
            ],
          });

          const determinante: number =
            firstMultiplicationValue +
            secondMultiplicationValue +
            thirdMultiplicationValue -
            (fourthMultiplicationValue +
              fifthMultiplicationValue +
              sixthMultiplicationValue);
          this.intermediateSteps.push({
            description: `Se realiza la resta entre lo obtenido en los dos pasos anteriores, dando como resultado ${determinante}`,
            latexExpression: `\\text{det} = ${firstMultiplicationValue} + ${secondMultiplicationValue} + ${thirdMultiplicationValue} - (${fourthMultiplicationValue} + ${fifthMultiplicationValue} + ${sixthMultiplicationValue}) = ${determinante}`,
          });

          return determinante;
        } else {
          throw new Error('La regla de Sarrus solo se aplica a matrices 3x3');
        }
      }
    } else if (this.operator === MATRIZ_TRIANGULAR_SUPERIOR) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error(
          'No se puede calcular la matriz triangular superior de un número'
        );
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        const matrix: IMatrixElement[][] = JSON.parse(
          JSON.stringify(
            (this.operand.getResultado() as IMatrixElement[][]).map(
              (row: IMatrixElement[]) => row.map((element) => ({ ...element }))
            )
          )
        );

        const numRows: number = matrix.length;
        const numCols: number = matrix[0].length;

        for (let col: number = 0; col < numCols - 1; col++) {
          for (let row: number = col + 1; row < numRows; row++) {
            const factor: number =
              getMatrixCellValue(matrix[row][col]) /
              getMatrixCellValue(matrix[col][col]);
            for (let i = col; i < numCols; i++) {
              matrix[row][i].value = (
                getMatrixCellValue(matrix[row][i]) -
                factor * getMatrixCellValue(matrix[col][i])
              ).toString();
            }

            const fraction: Fraction = new Fraction(factor);

            const numerator: number = fraction.n;
            const denominator: number = fraction.d;

            const minusSign: string = factor < 0 ? '-' : '';
            let fractionString: string = `${numerator} \\over ${denominator}`;

            if (denominator === 1) {
              fractionString = numerator.toString();
            }
            const operationToShow: string = minusSign
              ? `+ $${fractionString}$`
              : `- $${fractionString}$`;
            this.intermediateSteps.push({
              description: `Se realiza la operación F${row + 1} = F${
                row + 1
              } ${operationToShow} $*$ F${col + 1}`,
              latexExpression: getMatrixLatexForm(matrix),
            });
          }
        }

        return matrix;
      }
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    let latexForm: string = '';

    if (this.operator === COS_TYPE) {
      latexForm = `${leftParenthesis}\\cos(${getCorrectFormToDisplay(
        this.operand
      )})${rightParenthesis}`;
    } else if (this.operator === SIN_TYPE) {
      latexForm = `${leftParenthesis}\\sin(${getCorrectFormToDisplay(
        this.operand
      )})${rightParenthesis}`;
    } else if (this.operator === TAN_TYPE) {
      latexForm = `${leftParenthesis}\\tan(${getCorrectFormToDisplay(
        this.operand
      )})${rightParenthesis}`;
    } else if (this.operator === SQRT_TYPE) {
      latexForm = `${leftParenthesis}\\sqrt{${getCorrectFormToDisplay(
        this.operand
      )}}${rightParenthesis}`;
    } else if (this.operator === MAT_INV_TYPE) {
      latexForm = `${leftParenthesis}${getCorrectFormToDisplay(
        this.operand
      )}^{-1}${rightParenthesis}`;
    } else if (this.operator === TRANSPUESTA_TYPE) {
      latexForm = `${leftParenthesis}${getCorrectFormToDisplay(
        this.operand
      )}^{T}${rightParenthesis}`;
    } else if (this.operator === DETERMINANTE_2_x_2_TYPE) {
      latexForm = `${leftParenthesis}${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}${rightParenthesis}`;
    } else if (this.operator === SARRUS_TYPE) {
      latexForm = `${leftParenthesis}${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}${rightParenthesis}`;
    } else if (this.operator === MATRIZ_TRIANGULAR_SUPERIOR) {
      latexForm = `${leftParenthesis}${getCorrectFormToDisplay(
        this.operand
      )}${rightParenthesis}`;
    }
    return latexForm;
  }

  public override getLatexFormOperators(): string {
    return `$${getCorrectFormToDisplay(this.operand)}$`;
  }

  private isSquareMatrix(): boolean {
    const matrix: IMatrixElement[][] =
      this.operand.getResultado() as IMatrixElement[][];
    const rows: number = matrix.length;
    const columns: number = matrix[0].length;

    return rows === columns;
  }
}
