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

    const fractionString: string = `${numerator}\\over${denominator}`;

    if (denominator > 1) {
      return fractionString;
    }

    const minusSign: string = decimal < 0 ? '-' : '';
    return `${minusSign}${numerator}`;
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
            let valorMatriz1: number = 0;
            if (matrix1[i][j].value.includes('/')) {
              const divisionParts: string[] = matrix1[i][j].value.split('/');
              valorMatriz1 =
                Number(divisionParts[0]) / Number(divisionParts[1]);
            } else {
              valorMatriz1 = Number(matrix1[i][j].value);
            }
            let valorMatriz2: number = 0;
            if (matrix2[i][j].value.includes('/')) {
              const divisionParts: string[] = matrix2[i][j].value.split('/');
              valorMatriz2 =
                Number(divisionParts[0]) / Number(divisionParts[1]);
            } else {
              valorMatriz2 = Number(matrix2[i][j].value);
            }
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
            const valorMatriz1: number = Number(matrix1[i][j].value);
            const valorMatriz2: number = Number(matrix2[i][j].value);
            const resta: number = valorMatriz1 - valorMatriz2;
            filaResultado.push({ value: resta.toString() });
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
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      }
    }

    return null;
  }
}
