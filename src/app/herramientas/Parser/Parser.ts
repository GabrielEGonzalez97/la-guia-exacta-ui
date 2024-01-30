import { IMatrixWithName } from '../operaciones-con-matrices/matrix/interfaces';
import { Lexer } from './Lexer';
import { TercetoAbstracto } from './Terceto/TercetoAbstracto';
import { TercetoMatrix } from './Terceto/TercetoAbstractoImplementations/TercetoMatrix';
import { TercetoNumerico } from './Terceto/TercetoAbstractoImplementations/TercetoNumerico';
import { TercetoBinaryOperator } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperator';
import { TercetoChequearIgualdad } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperatorImplementations/TercetoChequearIgualdad';
import { TercetoDivision } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperatorImplementations/TercetoDivision';
import { TercetoMultiplicacion } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperatorImplementations/TercetoMultiplicacion';
import { TercetoPotencia } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperatorImplementations/TercetoPotencia';
import { TercetoResta } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperatorImplementations/TercetoResta';
import { TercetoSuma } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperatorImplementations/TercetoSuma';
import { TercetoUnaryOperator } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperator';
import { TercetoCoseno } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoCoseno';
import { TercetoDeterminante2x2 } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoDeterminante2x2';
import { TercetoDeterminanteDesarrolloColumna } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoDeterminanteDesarrolloColumna';
import { TercetoDeterminanteDesarrolloFila } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoDeterminanteDesarrolloFila';
import { TercetoDeterminanteSarrus } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoDeterminanteSarrus';
import { TercetoMatrizDiagonal } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoMatrizDiagonal';
import { TercetoMatrizInversa } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoMatrizInversa';
import { TercetoMatrizTranspuesta } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoMatrizTranspuesta';
import { TercetoMatrizTriangularInferior } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoMatrizTriangularInferior';
import { TercetoMatrizTriangularSuperior } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoMatrizTriangularSuperior';
import { TercetoRaizCuadrada } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoRaizCuadrada';
import { TercetoSeno } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoSeno';
import { TercetoTangente } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoTangente';
import { Token } from './Token';
import {
  COS_TYPE,
  DETERMINANT_2_x_2_TYPE,
  DETERMINANT_FIFTH_COLUMN_TYPE,
  DETERMINANT_FIFTH_ROW_TYPE,
  DETERMINANT_FIRST_COLUMN_TYPE,
  DETERMINANT_FIRST_ROW_TYPE,
  DETERMINANT_FOURTH_COLUMN_TYPE,
  DETERMINANT_FOURTH_ROW_TYPE,
  DETERMINANT_SARRUS_TYPE,
  DETERMINANT_SECOND_COLUMN_TYPE,
  DETERMINANT_SECOND_ROW_TYPE,
  DETERMINANT_THIRD_COLUMN_TYPE,
  DETERMINANT_THIRD_ROW_TYPE,
  MATRIX_TYPE,
  MATRIZ_DIAGONAL,
  MATRIZ_INVERTIDA_TYPE,
  MATRIZ_TRANSPUESTA_TYPE,
  MATRIZ_TRIANGULAR_INFERIOR,
  MATRIZ_TRIANGULAR_SUPERIOR,
  NUMBER_TYPE,
  SIN_TYPE,
  SQRT_TYPE,
  TAN_TYPE,
  UNARY_FUNCTIONS,
} from './constants';

export class Parser {
  private lexer: Lexer;
  private matrices: IMatrixWithName[] = [];
  private currentToken: Token | null;
  private tercetos: TercetoAbstracto[] = [];
  private resultado: TercetoAbstracto | null;

  public isLastTokenAFloat: boolean = false;

  constructor(lexer: Lexer, matrices: IMatrixWithName[]) {
    this.lexer = lexer;
    this.matrices = matrices;
    this.currentToken = this.lexer.getNextToken();
  }

  public parse(): void {
    this.resultado = this.parseEqualityExpression();
  }

  public getResultado(): TercetoAbstracto | null {
    return this.resultado;
  }

  public getTercetos(): TercetoAbstracto[] {
    return this.tercetos;
  }

  private parseEqualityExpression(): TercetoAbstracto {
    let expresion: TercetoAbstracto = this.parseExpression();
    while (this.currentToken && this.currentToken.type === '=') {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const newExpression: TercetoAbstracto = this.parseExpression();
      expresion = this.createCorrespondingBinaryTerceto(
        operator.value,
        expresion,
        newExpression
      );
      this.tercetos.push(expresion);
    }
    return expresion;
  }

  private parseExpression(): TercetoAbstracto {
    let term: TercetoAbstracto = this.parseTerm();
    while (
      this.currentToken &&
      (this.currentToken.type === '+' || this.currentToken.type === '-')
    ) {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const newTerm: TercetoAbstracto = this.parseTerm();
      term = this.createCorrespondingBinaryTerceto(
        operator.value,
        term,
        newTerm
      );
      this.tercetos.push(term);
    }
    return term;
  }

  private parseTerm(): TercetoAbstracto {
    let powTerm: TercetoAbstracto = this.parsePowTerm();
    while (
      this.currentToken &&
      (this.currentToken.type === '*' || this.currentToken.type === '/')
    ) {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const newPowTerm: TercetoAbstracto = this.parsePowTerm();
      powTerm = this.createCorrespondingBinaryTerceto(
        operator.value,
        powTerm,
        newPowTerm
      );
      this.tercetos.push(powTerm);
    }
    return powTerm;
  }

  private parsePowTerm(): TercetoAbstracto {
    let factor: TercetoAbstracto = this.parseFactor();
    while (this.currentToken && this.currentToken.type === '^') {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const newFactor: TercetoAbstracto = this.parseFactor();
      factor = this.createCorrespondingBinaryTerceto(
        operator.value,
        factor,
        newFactor
      );
      this.tercetos.push(factor);
    }
    return factor;
  }

  private parseFactor(): TercetoAbstracto {
    if (this.currentToken && this.currentToken.type === '(') {
      this.eat('(');
      const expresion: TercetoAbstracto = this.parseExpression();
      this.eat(')');
      expresion.parentheses = { left: true, right: true };
      return expresion;
    } else if (this.currentToken && this.currentToken.type === NUMBER_TYPE) {
      const numero: TercetoNumerico = new TercetoNumerico(
        this.currentToken.value,
        {
          left: false,
          right: false,
        }
      );
      this.eat(NUMBER_TYPE);
      return numero;
    } else if (this.currentToken && this.currentToken.type === MATRIX_TYPE) {
      const matrix: TercetoMatrix = new TercetoMatrix(
        this.matrices.find(
          (matriz) => matriz.name === this.currentToken.value
        ).matrix,
        {
          left: false,
          right: false,
        }
      );
      this.eat(MATRIX_TYPE);
      return matrix;
    } else if (
      this.currentToken &&
      UNARY_FUNCTIONS.includes(this.currentToken.type)
    ) {
      const functionName: string = this.currentToken.value;
      this.eat(this.currentToken.type);
      this.eat('(');
      const expression: TercetoAbstracto = this.parseExpression();
      this.eat(')');
      const tercetoUnaryOperator: TercetoUnaryOperator =
        this.createCorrespondingUnaryTerceto(functionName, expression);
      this.tercetos.push(tercetoUnaryOperator);
      return tercetoUnaryOperator;
    } else {
      throw new Error('Token inesperado');
    }
  }

  private eat(tokenType: string): void {
    if (this.currentToken && this.currentToken.type === tokenType) {
      this.checkIfLastTokenIsAFloat();
      this.currentToken = this.lexer.getNextToken();
    } else {
      throw new Error(
        `Se esperaba un ${tokenType} y se recibió: ${this.currentToken?.type}`
      );
    }
  }

  private checkIfLastTokenIsAFloat(): void {
    this.isLastTokenAFloat = false;
    if (this.currentToken && this.currentToken.type === NUMBER_TYPE) {
      if (this.currentToken.value.includes('.')) {
        this.isLastTokenAFloat = true;
      }
    }
  }

  private createCorrespondingBinaryTerceto(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto
  ): TercetoBinaryOperator {
    if (operator === '=') {
      return new TercetoChequearIgualdad(operator, operand1, operand2, {
        left: false,
        right: false,
      });
    } else if (operator === '+') {
      return new TercetoSuma(operator, operand1, operand2, {
        left: false,
        right: false,
      });
    } else if (operator === '-') {
      return new TercetoResta(operator, operand1, operand2, {
        left: false,
        right: false,
      });
    } else if (operator === '*') {
      return new TercetoMultiplicacion(operator, operand1, operand2, {
        left: false,
        right: false,
      });
    } else if (operator === '/') {
      return new TercetoDivision(operator, operand1, operand2, {
        left: false,
        right: false,
      });
    } else if (operator === '^') {
      return new TercetoPotencia(operator, operand1, operand2, {
        left: false,
        right: false,
      });
    } else {
      throw new Error(`No se reconoce a ${operator} como un operador`);
    }
  }

  private createCorrespondingUnaryTerceto(
    functionName: string,
    expression: TercetoAbstracto
  ): TercetoUnaryOperator {
    if (functionName === COS_TYPE) {
      return new TercetoCoseno(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === SIN_TYPE) {
      return new TercetoSeno(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === TAN_TYPE) {
      return new TercetoTangente(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === SQRT_TYPE) {
      return new TercetoRaizCuadrada(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === DETERMINANT_2_x_2_TYPE) {
      return new TercetoDeterminante2x2(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === DETERMINANT_SARRUS_TYPE) {
      return new TercetoDeterminanteSarrus(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === DETERMINANT_FIRST_COLUMN_TYPE) {
      return new TercetoDeterminanteDesarrolloColumna(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        0
      );
    } else if (functionName === DETERMINANT_SECOND_COLUMN_TYPE) {
      return new TercetoDeterminanteDesarrolloColumna(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        1
      );
    } else if (functionName === DETERMINANT_THIRD_COLUMN_TYPE) {
      return new TercetoDeterminanteDesarrolloColumna(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        2
      );
    } else if (functionName === DETERMINANT_FOURTH_COLUMN_TYPE) {
      return new TercetoDeterminanteDesarrolloColumna(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        3
      );
    } else if (functionName === DETERMINANT_FIFTH_COLUMN_TYPE) {
      return new TercetoDeterminanteDesarrolloColumna(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        4
      );
    } else if (functionName === DETERMINANT_FIRST_ROW_TYPE) {
      return new TercetoDeterminanteDesarrolloFila(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        0
      );
    } else if (functionName === DETERMINANT_SECOND_ROW_TYPE) {
      return new TercetoDeterminanteDesarrolloFila(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        1
      );
    } else if (functionName === DETERMINANT_THIRD_ROW_TYPE) {
      return new TercetoDeterminanteDesarrolloFila(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        2
      );
    } else if (functionName === DETERMINANT_FOURTH_ROW_TYPE) {
      return new TercetoDeterminanteDesarrolloFila(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        3
      );
    } else if (functionName === DETERMINANT_FIFTH_ROW_TYPE) {
      return new TercetoDeterminanteDesarrolloFila(
        functionName,
        expression,
        {
          left: false,
          right: false,
        },
        4
      );
    } else if (functionName === MATRIZ_INVERTIDA_TYPE) {
      return new TercetoMatrizInversa(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === MATRIZ_TRANSPUESTA_TYPE) {
      return new TercetoMatrizTranspuesta(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === MATRIZ_DIAGONAL) {
      return new TercetoMatrizDiagonal(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === MATRIZ_TRIANGULAR_SUPERIOR) {
      return new TercetoMatrizTriangularSuperior(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === MATRIZ_TRIANGULAR_INFERIOR) {
      return new TercetoMatrizTriangularInferior(functionName, expression, {
        left: false,
        right: false,
      });
    } else {
      throw new Error(`No se reconoce a ${functionName} como una función`);
    }
  }
}
