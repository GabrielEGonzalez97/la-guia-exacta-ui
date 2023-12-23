import Fraction from 'fraction.js';
import { IMatrixElement, IMatrixWithName } from './matrix/interfaces';

interface IParentheses {
  left: boolean;
  right: boolean;
}

export const NUMBER_TYPE: string = 'NUMBER';
export const MATRIX_TYPE: string = 'MATRIX';

export class Token {
  constructor(public type: string, public value: string) {}
}

export abstract class TercetoAbstracto {
  public parentheses: IParentheses;

  constructor(parentheses: IParentheses) {
    this.parentheses = parentheses;
  }

  abstract getTercetoForm(): string;
  abstract getResultado(): number | IMatrixElement[][];
  abstract getLatexForm(): string;
  abstract getTercetoType(): string;
}

export class Terceto extends TercetoAbstracto {
  public operator: string;
  public operand1: TercetoAbstracto;
  public operand2: TercetoAbstracto;

  constructor(
    operator: string,
    operand1: TercetoAbstracto,
    operand2: TercetoAbstracto,
    parentheses: IParentheses
  ) {
    super(parentheses);
    this.operator = operator;
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

  private decimalToFraction(decimal: number): string {
    const fraction: Fraction = new Fraction(decimal);

    const numerator: number = fraction.n;
    const denominator: number = fraction.d;

    const fractionString: string = `${numerator}\\over${denominator}`;

    if (denominator > 1) {
      return fractionString;
    }

    const minusSign: string = decimal < 0 ? '-' : '';
    return `${minusSign}${numerator}`;
  }

  public override getResultado(): number | IMatrixElement[][] {
    console.log(this.operand1.getTercetoType());
    console.log(this.operand2.getTercetoType());
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

        const resultado: IMatrixElement[][] = [];

        for (let i: number = 0; i < numberOfRowsOfMatrix1; i++) {
          const filaResultado: IMatrixElement[] = [];
          for (let j: number = 0; j < numberOfColumnsOfMatrix1; j++) {
            let valorMatriz1: number = 0;
            if (matrix1[i][j].value.includes('/')) {
              const divisionParts: string[] = matrix1[i][j].value.split('/');
              valorMatriz1 =
                Number(divisionParts[0]) / Number(divisionParts[1]);
            } else {
              valorMatriz1 = Number(matrix1[i][j].value);
            }
            let valorMatriz2: number = 0;
            if (matrix2[i][j].value.includes('/')) {
              const divisionParts: string[] = matrix2[i][j].value.split('/');
              valorMatriz2 =
                Number(divisionParts[0]) / Number(divisionParts[1]);
            } else {
              valorMatriz2 = Number(matrix2[i][j].value);
            }
            const suma: number = valorMatriz1 + valorMatriz2;
            filaResultado.push({ value: this.decimalToFraction(suma) });
          }
          resultado.push(filaResultado);
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
            const valorMatriz1: number = Number(matrix1[i][j].value);
            const valorMatriz2: number = Number(matrix2[i][j].value);
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
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return (
          Number(this.operand1.getResultado()) /
          Number(this.operand2.getResultado())
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
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '-') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      } else if (this.evaluateOperandsTypes(MATRIX_TYPE, MATRIX_TYPE)) {
        return MATRIX_TYPE;
      }
    } else if (this.operator === '*') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      }
    } else if (this.operator === '/') {
      if (this.evaluateOperandsTypes(NUMBER_TYPE, NUMBER_TYPE)) {
        return NUMBER_TYPE;
      }
    }

    return null;
  }
}

export class TercetoNumerico extends TercetoAbstracto {
  public number: number;

  constructor(number: number, parentheses: IParentheses) {
    super(parentheses);
    this.number = number;
  }

  public override getTercetoForm(): string {
    return this.number.toString();
  }

  public override getResultado(): number {
    return this.number;
  }

  public override getLatexForm(): string {
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    return `${leftParenthesis}${this.number.toString()}${rightParenthesis}`;
  }

  public override getTercetoType(): string {
    return NUMBER_TYPE;
  }
}

export class TercetoMatrix extends TercetoAbstracto {
  public matrix: IMatrixElement[][];

  constructor(matrix: IMatrixElement[][], parentheses: IParentheses) {
    super(parentheses);
    this.matrix = matrix;
  }

  public override getLatexForm(): string {
    // $\\begin{pmatrix}a & b\\\\ c & d \\\\ c & d\\end{pmatrix}$
    const leftParenthesis: string = this.parentheses.left ? '(' : '';
    const rightParenthesis: string = this.parentheses.right ? ')' : '';
    const rows: string[] = this.matrix.map((row: IMatrixElement[]) =>
      row.map((cell: IMatrixElement) => cell.value).join(' & ')
    );
    const matrixBody: string = rows.join('\\\\ ');
    return `${leftParenthesis}\\begin{pmatrix}${matrixBody}\\end{pmatrix}${rightParenthesis}`;
  }

  public override getResultado(): IMatrixElement[][] {
    return this.matrix;
  }

  public override getTercetoForm(): string {
    return JSON.stringify(this.matrix);
  }

  public override getTercetoType(): string {
    return MATRIX_TYPE;
  }
}

export class Lexer {
  private input: string;
  private currentPos: number;

  constructor(input: string) {
    this.input = input;
    this.currentPos = 0;
  }

  getNextToken(): Token | null {
    if (this.currentPos >= this.input.length) {
      return null;
    }

    const currentChar = this.input[this.currentPos];

    if (/\d+(\.\d+)?/.test(currentChar)) {
      let number: string = '';
      while (/\d|\./.test(this.input[this.currentPos])) {
        number += this.input[this.currentPos];
        this.currentPos++;
      }
      return new Token(NUMBER_TYPE, number);
    }

    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(currentChar)) {
      this.currentPos++;
      return new Token(MATRIX_TYPE, currentChar);
    }

    if ('+-*/()'.includes(currentChar)) {
      this.currentPos++;
      return new Token(currentChar, currentChar);
    }

    this.currentPos++;
    return this.getNextToken();
  }
}

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
