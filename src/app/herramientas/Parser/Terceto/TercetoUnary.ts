import { all, create } from 'mathjs';
const math = create(all);

import { getCorrectFormToDisplay } from '../../commonFunctions';
import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import {
  COS_TYPE,
  MATRIX_TYPE,
  MAT_INV_TYPE,
  NUMBER_TYPE,
  SIN_TYPE,
  TAN_TYPE,
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
    } else if (this.operator === MAT_INV_TYPE) {
      latexForm = `${leftParenthesis}${this.operand.getLatexForm()}^{-1}${rightParenthesis}`;
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
    } else if (this.operator === MAT_INV_TYPE) {
      if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
        throw new Error('No se puede calcular la matriz inversa de un número');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    }
    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
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
    } else if (this.operator === MAT_INV_TYPE) {
      latexForm = `${leftParenthesis}${getCorrectFormToDisplay(
        this.operand
      )}^{-1}${rightParenthesis}`;
    }
    return latexForm;
  }

  public override getLatexFormOperators(): string {
    return `$${this.operand.getLatexForm()}$`;
  }
}
