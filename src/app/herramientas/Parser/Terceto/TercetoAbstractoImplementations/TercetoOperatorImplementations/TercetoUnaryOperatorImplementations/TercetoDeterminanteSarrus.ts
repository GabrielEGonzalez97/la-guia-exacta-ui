import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import {
  getDeterminanteMatrixLatexForm,
  getDeterminanteMatrixLatexFormWithColors,
  getDeterminanteMatrixLatexFormWithMultiplicationsAndColors,
  getMatrixCellValue,
  getResultWithAlgebrite,
} from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoUnaryOperator } from '../TercetoUnaryOperator';

export class TercetoDeterminanteSarrus extends TercetoUnaryOperator {
  constructor(
    operator: string,
    operand: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand, parentheses);
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

        const firstMultiplicationValue: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(matrix[0][0])}) * (${getMatrixCellValue(
            matrix[1][1]
          )}) * (${getMatrixCellValue(matrix[2][2])})`
        );

        const secondMultiplicationValue: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(matrix[0][2])}) * (${getMatrixCellValue(
            matrix[1][0]
          )}) * (${getMatrixCellValue(matrix[2][1])})`
        );

        const thirdMultiplicationValue: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(matrix[0][1])}) * (${getMatrixCellValue(
            matrix[1][2]
          )}) * (${getMatrixCellValue(matrix[2][0])})`
        );

        const fourthMultiplicationValue: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(matrix[0][2])}) * (${getMatrixCellValue(
            matrix[1][1]
          )}) * (${getMatrixCellValue(matrix[2][0])})`
        );

        const fifthMultiplicationValue: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(matrix[0][0])}) * (${getMatrixCellValue(
            matrix[1][2]
          )}) * (${getMatrixCellValue(matrix[2][1])})`
        );

        const sixthMultiplicationValue: string = getResultWithAlgebrite(
          `(${getMatrixCellValue(matrix[0][1])}) * (${getMatrixCellValue(
            matrix[1][0]
          )}) * (${getMatrixCellValue(matrix[2][2])})`
        );

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

        const determinante: string = getResultWithAlgebrite(`
          (${firstMultiplicationValue}) +
          (${secondMultiplicationValue}) +
            (${thirdMultiplicationValue}) -
          ((${fourthMultiplicationValue}) +
            (${fifthMultiplicationValue}) +
            (${sixthMultiplicationValue}))`);
        this.intermediateSteps.push({
          description: `Se realiza la resta entre lo obtenido en los dos pasos anteriores, dando como resultado ${determinante}`,
          latexExpression: `\\text{det} = ${firstMultiplicationValue} + ${secondMultiplicationValue} + ${thirdMultiplicationValue} - (${fourthMultiplicationValue} + ${fifthMultiplicationValue} + ${sixthMultiplicationValue}) = ${determinante}`,
        });

        return determinante;
      } else {
        throw new Error('La regla de Sarrus solo se aplica a matrices 3x3');
      }
    }

    return null;
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
    return `Se calcula el determinante a través del método de Sarrus de ${this.getDescriptionCommonText()}`;
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
