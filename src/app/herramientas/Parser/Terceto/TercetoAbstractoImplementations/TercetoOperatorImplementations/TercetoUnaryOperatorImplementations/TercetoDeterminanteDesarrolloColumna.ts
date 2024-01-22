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
  getMatrixLatexForm,
  getSignsMatrix,
} from 'src/app/herramientas/commonFunctions';
import { ICalculationStep } from 'src/app/herramientas/operaciones-con-matrices/interfaces';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoDeterminanteDesarrolloColumna extends TercetoUnaryOperator {
  private columnToUse: number = 0;

  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses,
    columnToUse: number
  ) {
    super(operator, operand, parentheses);
    this.columnToUse = columnToUse;
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
        const sign: number = (i + this.columnToUse) % 2 === 0 ? 1 : -1;
        const matrixCofactor: IMatrixElement[][] = this.getCofactor(
          matrix,
          i,
          this.columnToUse
        );
        const determinanteParcial: number =
          getMatrixCellValue(matrix[i][this.columnToUse]) *
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
        const sign: number = (i + this.columnToUse) % 2 === 0 ? 1 : -1;
        const matrixCofactor: IMatrixElement[][] = this.getCofactor(
          matrix,
          i,
          this.columnToUse
        );
        localIntermediateSteps.push({
          description: `Se marca la fila (${i + 1}) y columna (${
            this.columnToUse + 1
          }) que no se va a considerar:`,
          latexExpression: `${getDeterminanteColumnDevelopment(
            matrix,
            i,
            this.columnToUse
          )}`,
        });
        localIntermediateSteps.push({
          description: `Se determina si hay que multiplicar por -1 o 1 mirando la matriz de signos:`,
          latexExpression: `${getSignsMatrix(n, i, this.columnToUse)}`,
        });
        const cellValue: number = getMatrixCellValue(
          matrix[i][this.columnToUse]
        );
        const determinanteCofactor: number =
          this.getDeterminante(matrixCofactor);
        const determinanteParcial: number =
          cellValue * sign * determinanteCofactor;
        determinantesParciales.push(
          `\\textcolor{BurntOrange}{${determinanteParcial}}`
        );
        localIntermediateSteps.push({
          description: `Se multiplican los números de color $\\textcolor{blue}{azul}$ por el determinante de la matriz formada por las celdas de color $\\textcolor{BrickRed}{bordo}$:`,
          latexExpression: `\\textcolor{blue}{${getMatrixCellValue(
            matrix[i][this.columnToUse]
          )}} * \\textcolor{blue}{${sign}} * ${getDeterminanteMatrixLatexFormWithSpecificColor(
            matrixCofactor,
            'BrickRed'
          )} = \\textcolor{BurntOrange}{${determinanteParcial}}`,
          intermediateSteps: [
            {
              description: `Se realiza la multiplicación $\\textcolor{blue}{${getMatrixCellValue(
                matrix[i][this.columnToUse]
              )}} * \\textcolor{blue}{${sign}}$ dando como resultado ${
                cellValue * sign
              }:`,
              latexExpression: `${
                cellValue * sign
              } * ${getDeterminanteMatrixLatexFormWithSpecificColor(
                matrixCofactor,
                'BrickRed'
              )}`,
            },
            {
              description: `$\\text{Se calcula el determinante de la matriz } ${getMatrixLatexForm(
                matrixCofactor
              )} \\text{ dando como resultado } ${determinanteCofactor}$:`,
              latexExpression: `${
                cellValue * sign
              } * ${determinanteCofactor} = ${determinanteCofactor}`,
              intermediateSteps: this.getDeterminanteSteps(matrixCofactor),
            },
          ],
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

  public override getDescription(): string {
    return `Se calcula el determinante mediante su desarrollo por la columna ${
      this.columnToUse + 1
    } de ${this.getDescriptionCommonText()}`;
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
