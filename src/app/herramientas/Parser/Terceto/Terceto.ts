import Fraction from 'fraction.js';
import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import { MATRIX_TYPE, NUMBER_TYPE } from '../constants';
import { TercetoAbstracto } from './TercetoAbstracto';
import { IParentheses } from './interfaces';

export class Terceto extends TercetoAbstracto {
  public operator: string;
  public operand1: TercetoAbstracto;
  public operand2: TercetoAbstracto;

  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(parentheses);
    this.operator = operator;
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  public override getTercetoForm(): string {
    return `${this.operator},
              ${this.operand1.getTercetoForm()},
              ${this.operand2.getTercetoForm()}`;
  }

  private evaluateOperandsTypes(
    expectedType1: string,
    expectedType2: string
  ): boolean {
    return (
      this.operand1.getTercetoType() === expectedType1 &&
      this.operand2.getTercetoType() === expectedType2
    );
  }

  private decimalToFraction(decimal: number): string {
    const fraction: Fraction = new Fraction(decimal);

    const numerator: number = fraction.n;
    const denominator: number = fraction.d;

    const minusSign: string = decimal < 0 ? '-' : '';
    const fractionString: string = `${minusSign}${numerator}\\over${denominator}`;

    if (denominator > 1) {
      return fractionString;
    }

    return `${minusSign}${numerator}`;
  }

  private getMatrixCellValue(cellValue: IMatrixElement): number {
    if (cellValue.value.includes('/')) {
      const divisionParts: string[] = cellValue.value.split('/');
      return Number(divisionParts[0]) / Number(divisionParts[1]);
    } else {
      return Number(cellValue.value);
    }
  }

  public override getResultado(): number | IMatrixElement[][] {
    console.log(this.operand1.getTercetoType());
    console.log(this.operand2.getTercetoType());
    if (this.operator === '+') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return (
          Number(this.operand1.getResultado()) +
          Number(this.operand2.getResultado())
        );
      } else if (
        this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE) ||
        this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)
      ) {
        throw new Error('No se puede sumar un número y una matriz');
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
            'Las matrices deben tener las mismas dimensiones para poder sumarlas.'
          );
        }

        const resultado: IMatrixElement[][] = [];

        for (let i: number = 0; i < numberOfRowsOfMatrix1; i++) {
          const filaResultado: IMatrixElement[] = [];
          for (let j: number = 0; j < numberOfColumnsOfMatrix1; j++) {
            const valorMatriz1: number = this.getMatrixCellValue(matrix1[i][j]);
            const valorMatriz2: number = this.getMatrixCellValue(matrix2[i][j]);
            const suma: number = valorMatriz1 + valorMatriz2;
            filaResultado.push({ value: this.decimalToFraction(suma) });
          }
          resultado.push(filaResultado);
        }

        return resultado;
      }
    } else if (this.operator === '-') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return (
          Number(this.operand1.getResultado()) -
          Number(this.operand2.getResultado())
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

        const resultado: IMatrixElement[][] = [];

        for (let i: number = 0; i < numberOfRowsOfMatrix1; i++) {
          const filaResultado: IMatrixElement[] = [];
          for (let j: number = 0; j < numberOfColumnsOfMatrix1; j++) {
            const valorMatriz1: number = this.getMatrixCellValue(matrix1[i][j]);
            const valorMatriz2: number = this.getMatrixCellValue(matrix2[i][j]);
            const resta: number = valorMatriz1 - valorMatriz2;
            filaResultado.push({ value: this.decimalToFraction(resta) });
          }
          resultado.push(filaResultado);
        }

        return resultado;
      }
    } else if (this.operator === '*') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return (
          Number(this.operand1.getResultado()) *
          Number(this.operand2.getResultado())
        );
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        const matrix1: IMatrixElement[][] =
          this.operand1.getResultado() as IMatrixElement[][];
        const matrix2: IMatrixElement[][] =
          this.operand2.getResultado() as IMatrixElement[][];
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
              .map(() => ({ value: '0' }))
        );

        for (let i = 0; i < numberOfRowsOfMatrix1; i++) {
          for (let j = 0; j < numberOfColumnsOfMatrix2; j++) {
            let suma: number = 0;
            for (let k = 0; k < numberOfColumnsOfMatrix1; k++) {
              const valorMatriz1: number = this.getMatrixCellValue(
                matrix1[i][k]
              );
              const valorMatriz2: number = this.getMatrixCellValue(
                matrix2[k][j]
              );

              suma += valorMatriz1 * valorMatriz2;
            }
            resultado[i][j].value = this.decimalToFraction(
              this.getMatrixCellValue({
                value: suma.toString(),
              })
            );
          }
        }

        return resultado;
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return (
          Number(this.operand1.getResultado()) /
          Number(this.operand2.getResultado())
        );
      }
    }

    return null;
  }

  public override getLatexForm(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    let latexForm: string = '';
    if (this.operator === '/') {
      latexForm = `${leftParenthesis}{${this.operand1.getLatexForm()} \\over ${this.operand2.getLatexForm()}}${rightParenthesis}`;
    } else {
      latexForm = `${leftParenthesis}${this.operand1.getLatexForm()} ${
        this.operator
      } ${this.operand2.getLatexForm()}${rightParenthesis}`;
    }
    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.operator === '+') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '-') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '*') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      }
    }

    return null;
  }
}
