import { IMatrixElement, IMatrixWithName } from './matrix/interfaces';

interface IParentheses {
  left: boolean;
  right: boolean;
}

export class Token {
  constructor(public type: string, public value: string) {}
}

export abstract class TercetoAbstracto {
  public parentheses: IParentheses;

  constructor(parentheses: IParentheses) {
    this.parentheses = parentheses;
  }

  abstract getTercetoForm(): string;
  abstract getResultado(): number;
  abstract getLatexForm(): string;
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

  public override getResultado(): number {
    if (this.operator === '+') {
      return this.operand1.getResultado() + this.operand2.getResultado();
    } else if (this.operator === '-') {
      return this.operand1.getResultado() - this.operand2.getResultado();
    } else if (this.operator === '*') {
      return this.operand1.getResultado() * this.operand2.getResultado();
    } else if (this.operator === '/') {
      return this.operand1.getResultado() / this.operand2.getResultado();
    }

    return -1;
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

  public override getResultado(): number {
    return null;
  }

  public override getTercetoForm(): string {
    return JSON.stringify(this.matrix);
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
      return new Token('NUMBER', number);
    }

    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(currentChar)) {
      this.currentPos++;
      return new Token('MATRIX', currentChar);
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
    } else if (this.currentToken && this.currentToken.type === 'NUMBER') {
      const numero: TercetoNumerico = new TercetoNumerico(
        parseFloat(this.currentToken.value),
        {
          left: false,
          right: false,
        }
      );
      this.eat('NUMBER');
      return numero;
    } else if (this.currentToken && this.currentToken.type === 'MATRIX') {
      const matrix: TercetoMatrix = new TercetoMatrix(
        this.matrices.find(
          (matriz) => matriz.name === this.currentToken.value
        ).matrix,
        {
          left: false,
          right: false,
        }
      );
      this.eat('MATRIX');
      return matrix;
    } else {
      throw new Error('Unexpected token');
    }
  }

  private eat(tokenType: string): void {
    if (this.currentToken && this.currentToken.type === tokenType) {
      this.currentToken = this.lexer.getNextToken();
    } else {
      throw new Error(
        `Unexpected token: ${this.currentToken?.type}, expected: ${tokenType}`
      );
    }
  }
}
