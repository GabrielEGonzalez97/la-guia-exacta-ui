import {
  MATRIX_TYPE,
  NUMBER_TYPE,
} from 'src/app/herramientas/Parser/constants';
import { getCorrectFormToDisplay } from 'src/app/herramientas/commonFunctions';
import { IMatrixElement } from 'src/app/herramientas/operaciones-con-matrices/matrix/interfaces';
import { TercetoAbstracto } from '../../../TercetoAbstracto';
import { IParentheses } from '../../../interfaces';
import { TercetoBinaryOperator } from '../TercetoBinaryOperator';

export class TercetoPotencia extends TercetoBinaryOperator {
  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(operator, operand1, operand2, parentheses);
  }

  public override getResultado(): number | IMatrixElement[][] {
    this.intermediateSteps = [];
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

    return null;
  }

  public override getLatexForm(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `(${this.operand1.getLatexForm()})^{${this.operand2.getLatexForm()}}`
    );

    return latexForm;
  }

  public override getTercetoType(): string {
    if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
      return NUMBER_TYPE;
    } else if (this.evaluateOperandsTypes(NUMBER_TYPE, MATRIX_TYPE)) {
      throw new Error('Una matriz no puede ser parte del exponente');
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, NUMBER_TYPE)) {
      return MATRIX_TYPE;
    } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
      throw new Error('Una matriz no puede ser parte del exponente');
    }

    return null;
  }

  public override getDescription(): string {
    return `Se calcula la potencia ${getCorrectFormToDisplay(
      this.operand2
    )} de $${getCorrectFormToDisplay(this.operand1)}$`;
  }

  public override getLatexFormResult(): string {
    const latexForm: string = this.getExpressionWithParentheses(
      `(${getCorrectFormToDisplay(this.operand1)})^{${getCorrectFormToDisplay(
        this.operand2
      )}}`
    );

    return latexForm;
  }
}
