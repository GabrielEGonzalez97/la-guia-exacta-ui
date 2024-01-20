import { IMatrixWithName } from '../operaciones-con-matrices/matrix/interfaces';
import { Lexer } from './Lexer';
import { TercetoAbstracto } from './Terceto/TercetoAbstracto';
import { TercetoMatrix } from './Terceto/TercetoAbstractoImplementations/TercetoMatrix';
import { TercetoNumerico } from './Terceto/TercetoAbstractoImplementations/TercetoNumerico';
import { TercetoBinaryOperator } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoBinaryOperator';
import { TercetoUnaryOperator } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperator';
import { TercetoCoseno } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoCoseno';
import { TercetoDeterminante2x2 } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoDeterminante2x2';
import { TercetoDeterminanteSarrus } from './Terceto/TercetoAbstractoImplementations/TercetoOperatorImplementations/TercetoUnaryOperatorImplementations/TercetoDeterminanteSarrus';
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
  DETERMINANTE_2_x_2_TYPE,
  MATRIX_TYPE,
  MATRIZ_TRIANGULAR_INFERIOR,
  MATRIZ_TRIANGULAR_SUPERIOR,
  MAT_INV_TYPE,
  NUMBER_TYPE,
  SARRUS_TYPE,
  SIN_TYPE,
  SQRT_TYPE,
  TAN_TYPE,
  TRANSPUESTA_TYPE,
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
    this.resultado = this.parseExpression();
  }

  public getResultado(): TercetoAbstracto | null {
    return this.resultado;
  }

  public getTercetos(): TercetoAbstracto[] {
    return this.tercetos;
  }

  private parseExpression(): TercetoAbstracto {
    let termino: TercetoAbstracto = this.parseTerm();
    while (
      this.currentToken &&
      (this.currentToken.type === '+' || this.currentToken.type === '-')
    ) {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const nuevoTermino: TercetoAbstracto = this.parseTerm();
      termino = new TercetoBinaryOperator(
        operator.value,
        termino,
        nuevoTermino,
        {
          left: false,
          right: false,
        }
      );
      this.tercetos.push(termino);
    }
    return termino;
  }

  private parseTerm(): TercetoAbstracto {
    let powTerm: TercetoAbstracto = this.parsePowTerm();
    while (
      this.currentToken &&
      (this.currentToken.type === '*' || this.currentToken.type === '/')
    ) {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const nuevoFactor: TercetoAbstracto = this.parseFactor();
      powTerm = new TercetoBinaryOperator(
        operator.value,
        powTerm,
        nuevoFactor,
        {
          left: false,
          right: false,
        }
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
      const nuevoFactor: TercetoAbstracto = this.parseFactor();
      factor = new TercetoBinaryOperator(operator.value, factor, nuevoFactor, {
        left: false,
        right: false,
      });
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
        parseFloat(this.currentToken.value),
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
    } else if (functionName === MAT_INV_TYPE) {
      return new TercetoMatrizInversa(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === TRANSPUESTA_TYPE) {
      return new TercetoMatrizTranspuesta(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === DETERMINANTE_2_x_2_TYPE) {
      return new TercetoDeterminante2x2(functionName, expression, {
        left: false,
        right: false,
      });
    } else if (functionName === SARRUS_TYPE) {
      return new TercetoDeterminanteSarrus(functionName, expression, {
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
