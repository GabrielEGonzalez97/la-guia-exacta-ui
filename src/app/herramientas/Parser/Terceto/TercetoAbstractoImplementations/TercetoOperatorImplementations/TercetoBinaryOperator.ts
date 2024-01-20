import {
  getCorrectFormToDisplay,
  getMatrixCellValue,
  getMatrixLatexForm,
} from '../../../../commonFunctions';
import { IMatrixElement } from '../../../../operaciones-con-matrices/matrix/interfaces';
import { MATRIX_TYPE, NUMBER_TYPE } from '../../../constants';
import { TercetoAbstracto } from '../../TercetoAbstracto';
import { IParentheses } from '../../interfaces';
import { TercetoOperator } from '../TercetoOperator';

export class TercetoBinaryOperator extends TercetoOperator {
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

  private multiplyMatrices(
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

  public override getResultado(): number | IMatrixElement[][] {
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
              }] de cada matriz (${valorMatriz1} y ${valorMatriz2}), siendo el resultado ${suma}. Se coloca el resultado en la celda [${
                i + 1
              }, ${j + 1}] de la matriz resultante.`,
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

            const resta: number = valorMatriz1 - valorMatriz2;
            resultado[i][j].value = resta.toString();
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
        return this.multiplyMatrices(matrix1, matrix2);
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
    } else if (this.operator === '^') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return Math.pow(
          Number(this.operand1.getResultado()),
          Number(this.operand2.getResultado())
        );
      } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
        throw new Error('Una matriz no puede ser parte del exponente');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
        const powNumber: number = Number(this.operand2.getResultado());
        const matrix: IMatrixElement[][] =
          this.operand1.getResultado() as IMatrixElement[][];
        const numberOfRowsOfMatrix: number = matrix.length;
        const numberOfColumnsOfMatrix: number = matrix[0].length;

        if (numberOfRowsOfMatrix !== numberOfColumnsOfMatrix) {
          throw new Error(
            'Sólo se puede calcular la potencia de matrices cuadradas ya que para multiplicar matrices tiene que coincidir el número de filas de una matriz con el número de columnas de la otra matriz.'
          );
        }

        let resultado: IMatrixElement[][] = matrix;

        for (let i: number = 1; i < powNumber; i++) {
          resultado = this.multiplyMatrices(resultado, matrix);
        }

        return resultado;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        throw new Error('Una matriz no puede ser parte del exponente');
      }
    }

    return null;
  }

  public override getLatexForm(): string {
    let latexForm: string = '';
    if (this.operator === '/') {
      latexForm = this.getExpressionWithParentheses(
        `{${this.operand1.getLatexForm()} \\over ${this.operand2.getLatexForm()}}`
      );
    } else if (this.operator === '^') {
      latexForm = this.getExpressionWithParentheses(
        `(${this.operand1.getLatexForm()})^{${this.operand2.getLatexForm()}}`
      );
    } else {
      latexForm = this.getExpressionWithParentheses(
        `${this.operand1.getLatexForm()} ${
          this.operator
        } ${this.operand2.getLatexForm()}`
      );
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
    } else if (this.operator === '^') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
        throw new Error('Una matriz no puede ser parte del exponente');
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
        return MATRIX_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        throw new Error('Una matriz no puede ser parte del exponente');
      }
    }

    return null;
  }

  public override getLatexFormResult(): string {
    let latexForm: string = '';
    if (this.operator === '/') {
      latexForm = this.getExpressionWithParentheses(
        `{${getCorrectFormToDisplay(
          this.operand1
        )} \\over ${getCorrectFormToDisplay(this.operand2)}}`
      );
    } else if (this.operator === '^') {
      latexForm = this.getExpressionWithParentheses(
        `(${getCorrectFormToDisplay(this.operand1)})^{${getCorrectFormToDisplay(
          this.operand2
        )}}`
      );
    } else {
      latexForm = this.getExpressionWithParentheses(
        `${getCorrectFormToDisplay(this.operand1)} ${
          this.operator
        } ${getCorrectFormToDisplay(this.operand2)}`
      );
    }
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
}
