import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getDeterminanteColumnDevelopment,
  getDeterminanteMatrixLatexForm,
  getDeterminanteMatrixLatexFormWithMultiplicationsAndColors,
  getDeterminanteMatrixLatexFormWithSpecificColor,
  getMatrixCellValue,
  getSignsMatrix,
} from 'src/app/herramientas/commonFunctions';
import { ICalculationStep } from 'src/app/herramientas/operaciones-con-matrices/interfaces';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoDeterminantePrimeraColumna extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
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

      this.intermediateSteps = this.getDeterminanteSteps(matrix);
      return this.getDeterminante(matrix);
    }

    return null;
  }

  private getDeterminante(matrix: IMatrixElement[][]): number {
    const n: number = matrix.length;

    let determinante: number = 0;

    if (n === 2) {
      return this.getDeterminante2x2(matrix);
    } else {
      for (let i: number = 0; i < n; i++) {
        const sign: number = (i + 0) % 2 === 0 ? 1 : -1;
        const matrixCofactor: IMatrixElement[][] = this.getCofactor(
          matrix,
          i,
          0
        );
        const determinanteParcial: number =
          getMatrixCellValue(matrix[i][0]) *
          sign *
          this.getDeterminante(matrixCofactor);
        determinante += determinanteParcial;
      }

      return determinante;
    }
  }

  private getDeterminanteSteps(matrix: IMatrixElement[][]): ICalculationStep[] {
    const n: number = matrix.length;
    let localIntermediateSteps: ICalculationStep[] = [];

    let determinante: number = 0;
    let determinantesParciales: string[] = [];

    if (n === 2) {
      return this.getDeterminante2x2Steps(matrix);
    } else {
      for (let i: number = 0; i < n; i++) {
        const sign: number = (i + 0) % 2 === 0 ? 1 : -1;
        const matrixCofactor: IMatrixElement[][] = this.getCofactor(
          matrix,
          i,
          0
        );
        localIntermediateSteps.push({
          description: `Se marca la fila (${
            i + 1
          }) y columna (${1}) que no se va a considerar:`,
          latexExpression: `${getDeterminanteColumnDevelopment(matrix, i, 0)}`,
        });
        localIntermediateSteps.push({
          description: `Se determina si hay que multiplicar por -1 o 1 mirando la matriz de signos:`,
          latexExpression: `${getSignsMatrix(n, i, 0)}`,
        });
        const determinanteParcial: number =
          getMatrixCellValue(matrix[i][0]) *
          sign *
          this.getDeterminante(matrixCofactor);
        determinantesParciales.push(
          `\\textcolor{BurntOrange}{${determinanteParcial}}`
        );
        localIntermediateSteps.push({
          description: `Se multiplican los números de color $\\textcolor{blue}{azul}$ por el determinante de la matriz formada por las celdas de color $\\textcolor{BrickRed}{bordo}$:`,
          latexExpression: `\\textcolor{blue}{${getMatrixCellValue(
            matrix[i][0]
          )}} * \\textcolor{blue}{${sign}} * ${getDeterminanteMatrixLatexFormWithSpecificColor(
            matrixCofactor,
            'BrickRed'
          )} = \\textcolor{BurntOrange}{${determinanteParcial}}`,
          intermediateSteps: this.getDeterminanteSteps(matrixCofactor),
        });
        determinante += determinanteParcial;
      }

      localIntermediateSteps.push({
        description: `Se suman cada uno de los números obtenidos en $\\textcolor{BurntOrange}{naranja}$:`,
        latexExpression: `${determinantesParciales.join(
          ' + '
        )} = ${determinante}`,
      });

      return localIntermediateSteps;
    }
  }

  private getDeterminante2x2(matrix: IMatrixElement[][]): number {
    const firstResult: number =
      getMatrixCellValue(matrix[0][0]) * getMatrixCellValue(matrix[1][1]);
    const secondResult: number =
      getMatrixCellValue(matrix[0][1]) * getMatrixCellValue(matrix[1][0]);
    const determinante: number = firstResult - secondResult;

    return determinante;
  }

  private getDeterminante2x2Steps(
    matrix: IMatrixElement[][]
  ): ICalculationStep[] {
    let localIntermediateSteps: ICalculationStep[] = [];

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
    localIntermediateSteps.push({
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
    localIntermediateSteps.push({
      description: `Se multiplican los números de igual color: ${matrix[0][1].value} * ${matrix[1][0].value} = ${secondResult}`,
      latexExpression: `${getDeterminanteMatrixLatexFormWithMultiplicationsAndColors(
        matrix,
        highlightedCellsStep2,
        'swarrow'
      )}`,
    });

    localIntermediateSteps.push({
      description: `Se realiza la resta entre lo obtenido en los dos pasos anteriores, dando como resultado ${determinante}`,
      latexExpression: `\\text{det} = ${firstResult} - ${secondResult} = ${determinante}`,
    });
    return localIntermediateSteps;
  }

  private getCofactor(
    matrix: IMatrixElement[][],
    row: number,
    col: number
  ): IMatrixElement[][] {
    const n: number = matrix.length;
    const cofactor: IMatrixElement[][] = [];

    for (let i: number = 0; i < n; i++) {
      if (i !== row) {
        const rowCofactor: IMatrixElement[] = [];
        for (let j: number = 0; j < n; j++) {
          if (j !== col) {
            rowCofactor.push(matrix[i][j]);
          }
        }
        cofactor.push(rowCofactor);
      }
    }

    return cofactor;
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE)) {
      throw new Error('No se puede calcular el determinante de un número');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE)) {
      return NUMBER_TYPE;
    }

    return null;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `${getDeterminanteMatrixLatexForm(
        this.operand.getResultado() as IMatrixElement[][]
      )}`
    );

    return latexForm;
  }
}
