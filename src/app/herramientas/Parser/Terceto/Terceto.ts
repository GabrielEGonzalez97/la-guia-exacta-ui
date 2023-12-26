import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
  getMatrixLatexForm,
} from '../../commonFunctions';
import { IMatrixElement } from '../../operaciones-con-matrices/matrix/interfaces';
import { MATRIX_TYPE, NUMBER_TYPE } from '../constants';
import { TercetoAbstracto } from './TercetoAbstracto';
import { TercetoOperator } from './TercetoOperator';
import { IParentheses } from './interfaces';

export class Terceto extends TercetoOperator {
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

  private multiplyNumberByMatrix(
    number: number,
    matrix: IMatrixElement[][]
  ): IMatrixElement[][] {
    const result: IMatrixElement[][] = [];

    for (let i = 0; i < matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        result[i][j] = {
          value: (getMatrixCellValue(matrix[i][j]) * number).toString(),
        };
      }
    }

    return result;
  }

  private divideNumberByMatrix(
    number: number,
    matrix: IMatrixElement[][]
  ): IMatrixElement[][] {
    if (number === 0) {
      throw new Error('No se puede dividir por cero');
    }

    const result: IMatrixElement[][] = [];

    for (let i = 0; i < matrix.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        result[i][j] = {
          value: (getMatrixCellValue(matrix[i][j]) / number).toString(),
        };
      }
    }

    return result;
  }

  public override getResultado(): number | IMatrixElement[][] {
    // console.log(this.operand1.getTercetoType());
    // console.log(this.operand2.getTercetoType());
    this.intermediateSteps = [];
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

        const resultado: IMatrixElement[][] = Array.from(
          { length: numberOfRowsOfMatrix1 },
          () =>
            Array(numberOfColumnsOfMatrix1)
              .fill(undefined)
              .map(() => ({ value: '' }))
        );

        for (let i: number = 0; i < numberOfRowsOfMatrix1; i++) {
          for (let j: number = 0; j < numberOfColumnsOfMatrix1; j++) {
            const valorMatriz1: number = getMatrixCellValue(matrix1[i][j]);
            const valorMatriz2: number = getMatrixCellValue(matrix2[i][j]);

            const suma: number = valorMatriz1 + valorMatriz2;
            resultado[i][j].value = suma.toString();
            this.intermediateSteps.push({
              description: `Se calcula la suma entre las celdas [${i + 1}, ${
                j + 1
              }] de cada matriz (${valorMatriz1} y ${valorMatriz2}), siendo el resultado ${suma}`,
              latexExpression: getMatrixLatexForm(resultado),
            });
          }
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
            const valorMatriz1: number = getMatrixCellValue(matrix1[i][j]);
            const valorMatriz2: number = getMatrixCellValue(matrix2[i][j]);
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
      } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
        return this.multiplyNumberByMatrix(
          Number(this.operand1.getResultado()),
          this.operand2.getResultado() as IMatrixElement[][]
        );
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
        return this.multiplyNumberByMatrix(
          Number(this.operand2.getResultado()),
          this.operand1.getResultado() as IMatrixElement[][]
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
              const valorMatriz1: number = getMatrixCellValue(matrix1[i][k]);
              const valorMatriz2: number = getMatrixCellValue(matrix2[k][j]);

              suma += valorMatriz1 * valorMatriz2;
            }
            resultado[i][j].value = getMatrixCellValue({
              value: suma.toString(),
            }).toString();
          }
        }

        return resultado;
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        if (Number(this.operand2.getResultado()) === 0) {
          throw new Error('No se puede dividir por cero');
        }
        return (
          Number(this.operand1.getResultado()) /
          Number(this.operand2.getResultado())
        );
      } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
        throw new Error('No se puede dividir un número por una matriz');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
        return this.divideNumberByMatrix(
          Number(this.operand2.getResultado()),
          this.operand1.getResultado() as IMatrixElement[][]
        );
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        throw new Error(
          'No se puede dividir dos matrices con esta calculadora'
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
      } else if (
        this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE) ||
        this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)
      ) {
        throw new Error('No se puede sumar un número y una matriz');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '-') {
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
    } else if (this.operator === '*') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (
        this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE) ||
        this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)
      ) {
        return MATRIX_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
        throw new Error('No se puede dividir un número por una matriz');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
        return MATRIX_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        throw new Error(
          'No se puede dividir dos matrices con esta calculadora'
        );
      }
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    let latexForm: string = '';
    if (this.operator === '/') {
      latexForm = `${leftParenthesis}{${getCorrectFormToDisplay(
        this.operand1
      )} \\over ${getCorrectFormToDisplay(this.operand2)}}${rightParenthesis}`;
    } else {
      latexForm = `${leftParenthesis}${getCorrectFormToDisplay(
        this.operand1
      )} ${this.operator} ${getCorrectFormToDisplay(
        this.operand2
      )}${rightParenthesis}`;
    }
    return latexForm;
  }

  public override getLatexFormOperators(): string {
    const operand1Result: string = getCorrectFormToDisplay(
      this.operand1 as Terceto
    );
    const operand2Result: string = getCorrectFormToDisplay(
      this.operand2 as Terceto
    );
    return `$${operand1Result}$ y $${operand2Result}$`;
  }
}
