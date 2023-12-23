import { IMatrixWithName } from '../operaciones-con-matrices/matrix/interfaces';
import { Lexer } from './Lexer';
import { Terceto } from './Terceto/Terceto';
import { TercetoAbstracto } from './Terceto/TercetoAbstracto';
import { TercetoMatrix } from './Terceto/TercetoMatrix';
import { TercetoNumerico } from './Terceto/TercetoNumerico';
import { Token } from './Token';
import { MATRIX_TYPE, NUMBER_TYPE } from './constants';

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
      termino = new Terceto(operator.value, termino, nuevoTermino, {
        left: false,
        right: false,
      });
      this.tercetos.push(termino);
    }
    return termino;
  }

  private parseTerm(): TercetoAbstracto {
    let factor: TercetoAbstracto = this.parseFactor();
    while (
      this.currentToken &&
      (this.currentToken.type === '*' || this.currentToken.type === '/')
    ) {
      const operator: Token = this.currentToken;
      this.eat(this.currentToken.type);
      const nuevoFactor: TercetoAbstracto = this.parseFactor();
      factor = new Terceto(operator.value, factor, nuevoFactor, {
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
    } else {
      throw new Error('Unexpected token');
    }
  }

  private eat(tokenType: string): void {
    if (this.currentToken && this.currentToken.type === tokenType) {
      this.checkIfLastTokenIsAFloat();
      this.currentToken = this.lexer.getNextToken();
    } else {
      throw new Error(
        `Unexpected token: ${this.currentToken?.type}, expected: ${tokenType}`
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
}
