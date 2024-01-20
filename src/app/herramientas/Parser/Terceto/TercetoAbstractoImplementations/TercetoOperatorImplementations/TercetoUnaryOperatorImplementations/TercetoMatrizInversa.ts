import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import { getCorrectFormToDisplay } from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoMatrizInversa extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${this.operand.getLatexForm()}^{-1}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error('No se puede calcular la matriz inversa de un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      return MATRIX_TYPE;
    }

    return null;
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
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

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getCorrectFormToDisplay(this.operand)}^{-1}`
    );

    return latexForm;
  }
}
