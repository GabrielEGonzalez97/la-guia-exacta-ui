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
  getResultWithAlgebrite,
  getSignsMatrix,
} from 'src/app/herramientas/commonFunctions';
import { ICalculationStep } from 'src/app/herramientas/operaciones-con-matrices/interfaces';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoDeterminanteDesarrolloFila extends TercetoUnaryOperator {
  private rowToUse: number = 0;

  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses,
    rowToUse: number
  ) {
    super(operator, operand, parentheses);
    this.rowToUse = rowToUse;
  }

  public override getResultado(): string | IMatrixElement[][] {
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

      this.intermediateSteps = this.getDeterminanteSteps(matrix, this.rowToUse);
      return this.getDeterminante(matrix, this.rowToUse);
    }

    return null;
  }

  private getDeterminante(
    matrix: IMatrixElement[][],
    rowToUse: number
  ): string {
    const n: number = matrix.length;

    while (rowToUse >= n) {
      rowToUse = rowToUse - 1;
    }

    let determinante: string = '0';

    if (n === 2) {
      return this.getDeterminante2x2(matrix);
    } else {
      for (let columnIndex: number = 0; columnIndex < n; columnIndex++) {
        const sign: number = (rowToUse + columnIndex) % 2 === 0 ? 1 : -1;
        const matrixCofactor: IMatrixElement[][] = this.getCofactor(
          matrix,
          rowToUse,
          columnIndex
        );
        const determinanteParcial: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(
            matrix[rowToUse][columnIndex]
          )}) * (${sign}) * (${this.getDeterminante(matrixCofactor, rowToUse)})`
        );
        determinante = getResultWithAlgebrite(
          `(${determinante}) + (${determinanteParcial})`
        );
      }

      return determinante;
    }
  }

  private getDeterminanteSteps(
    matrix: IMatrixElement[][],
    rowToUse: number
  ): ICalculationStep[] {
    const n: number = matrix.length;
    let localIntermediateSteps: ICalculationStep[] = [];

    while (rowToUse >= n) {
      rowToUse = rowToUse - 1;
      localIntermediateSteps.push({
        description: `Cómo la fila a utilizar (${
          rowToUse + 2
        }) para el desarrollo no está dentro del tamaño de la matriz (${n}), entonces se usará el desarrollo por la fila ${
          rowToUse + 1
        }`,
        latexExpression: `${getDeterminanteMatrixLatexForm(matrix)}`,
      });
    }

    let determinante: string = '0';
    let determinantesParciales: string[] = [];

    if (n === 2) {
      return this.getDeterminante2x2Steps(matrix);
    } else {
      for (let columnIndex: number = 0; columnIndex < n; columnIndex++) {
        const sign: number = (rowToUse + columnIndex) % 2 === 0 ? 1 : -1;
        const matrixCofactor: IMatrixElement[][] = this.getCofactor(
          matrix,
          rowToUse,
          columnIndex
        );
        localIntermediateSteps.push({
          description: `Se marca la fila (${rowToUse + 1}) y columna (${
            columnIndex + 1
          }) que no se va a considerar:`,
          latexExpression: `${getDeterminanteColumnDevelopment(
            matrix,
            rowToUse,
            columnIndex
          )}`,
        });
        localIntermediateSteps.push({
          description: `Se determina si hay que multiplicar por -1 o 1 mirando la matriz de signos:`,
          latexExpression: `${getSignsMatrix(n, rowToUse, columnIndex)}`,
        });
        const cellValue: string = getMatrixCellValue(
          matrix[rowToUse][columnIndex]
        );
        const determinanteCofactor: string = this.getDeterminante(
          matrixCofactor,
          rowToUse
        );
        const determinanteParcial: string = getResultWithAlgebrite(
          `(${cellValue}) * (${sign}) * (${determinanteCofactor})`
        );
        determinantesParciales.push(
          `\\textcolor{BurntOrange}{${determinanteParcial}}`
        );
        localIntermediateSteps.push({
          description: `Se multiplican los números de color $\\textcolor{blue}{azul}$ por el determinante de la matriz formada por las celdas de color $\\textcolor{BrickRed}{bordo}$:`,
          latexExpression: `\\textcolor{blue}{${getMatrixCellValue(
            matrix[rowToUse][columnIndex]
          )}} * \\textcolor{blue}{${sign}} * ${getDeterminanteMatrixLatexFormWithSpecificColor(
            matrixCofactor,
            'BrickRed'
          )} = \\textcolor{BurntOrange}{${determinanteParcial}}`,
          intermediateSteps: [
            {
              description: `Se realiza la multiplicación $\\textcolor{blue}{${getMatrixCellValue(
                matrix[rowToUse][columnIndex]
              )}} * \\textcolor{blue}{${sign}}$ dando como resultado ${getResultWithAlgebrite(
                `(${cellValue}) * (${sign})`
              )}:`,
              latexExpression: `${getResultWithAlgebrite(
                `(${cellValue}) * (${sign})`
              )} * ${getDeterminanteMatrixLatexFormWithSpecificColor(
                matrixCofactor,
                'BrickRed'
              )}`,
            },
            {
              description: `$\\text{Se calcula el determinante de la matriz } ${getMatrixLatexForm(
                matrixCofactor
              )} \\text{ dando como resultado } ${determinanteCofactor}$:`,
              latexExpression: `${getResultWithAlgebrite(
                `(${cellValue}) * (${sign})`
              )} * ${determinanteCofactor} = ${determinanteCofactor}`,
              intermediateSteps: this.getDeterminanteSteps(
                matrixCofactor,
                rowToUse
              ),
            },
          ],
        });
        determinante = getResultWithAlgebrite(
          `(${determinante}) + (${determinanteParcial})`
        );
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

  private getDeterminante2x2(matrix: IMatrixElement[][]): string {
    const firstResult: string = getResultWithAlgebrite(
      `(${getMatrixCellValue(matrix[0][0])}) * (${getMatrixCellValue(
        matrix[1][1]
      )})`
    );
    const secondResult: string = getResultWithAlgebrite(
      `(${getMatrixCellValue(matrix[0][1])}) * (${getMatrixCellValue(
        matrix[1][0]
      )})`
    );
    const determinante: string = getResultWithAlgebrite(
      `(${firstResult}) - (${secondResult})`
    );

    return determinante;
  }

  private getDeterminante2x2Steps(
    matrix: IMatrixElement[][]
  ): ICalculationStep[] {
    let localIntermediateSteps: ICalculationStep[] = [];

    const firstResult: string = getResultWithAlgebrite(
      `(${getMatrixCellValue(matrix[0][0])}) * (${getMatrixCellValue(
        matrix[1][1]
      )})`
    );
    const secondResult: string = getResultWithAlgebrite(
      `(${getMatrixCellValue(matrix[0][1])}) * (${getMatrixCellValue(
        matrix[1][0]
      )})`
    );
    const determinante: string = getResultWithAlgebrite(
      `(${firstResult}) - (${secondResult})`
    );

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

    for (let rowIndex: number = 0; rowIndex < n; rowIndex++) {
      if (rowIndex !== row) {
        const rowCofactor: IMatrixElement[] = [];
        for (let columnIndex: number = 0; columnIndex < n; columnIndex++) {
          if (columnIndex !== col) {
            rowCofactor.push(matrix[rowIndex][columnIndex]);
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
    return `Se calcula el determinante mediante su desarrollo por la fila ${
      this.rowToUse + 1
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
