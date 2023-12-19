export class Token {
  constructor(public type: string, public value: string) {}
}

export abstract class TercetoAbstracto {
  public parentheses: { left: boolean; right: boolean };

  constructor(parentheses: { left: boolean; right: boolean }) {
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
    parentheses: { left: boolean; right: boolean }
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

  constructor(number: number, parentheses: { left: boolean; right: boolean }) {
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

    if (/\d/.test(currentChar)) {
      let num = '';
      while (/\d/.test(this.input[this.currentPos])) {
        num += this.input[this.currentPos];
        this.currentPos++;
      }
      return new Token('NUMBER', num);
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
  private currentToken: Token | null;
  private tercetos: TercetoAbstracto[] = [];
  private resultado: TercetoAbstracto | null;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.currentToken = this.lexer.getNextToken();
  }

  parse(): void {
    this.resultado = this.parseExpression();
  }

  getResultado(): TercetoAbstracto | null {
    return this.resultado;
  }

  getTercetos(): TercetoAbstracto[] {
    return this.tercetos;
  }

  parseExpression(): TercetoAbstracto {
    let termino = this.parseTerm();
    while (
      this.currentToken &&
      (this.currentToken.type === '+' || this.currentToken.type === '-')
    ) {
      const operator = this.currentToken;
      this.eat(this.currentToken.type);
      const nuevoTermino = this.parseTerm();
      termino = new Terceto(operator.value, termino, nuevoTermino, {
        left: false,
        right: false,
      });
      this.tercetos.push(termino);
    }
    return termino;
  }

  parseTerm(): TercetoAbstracto {
    let factor = this.parseFactor();
    while (
      this.currentToken &&
      (this.currentToken.type === '*' || this.currentToken.type === '/')
    ) {
      const operator = this.currentToken;
      this.eat(this.currentToken.type);
      const nuevoFactor = this.parseFactor();
      factor = new Terceto(operator.value, factor, nuevoFactor, {
        left: false,
        right: false,
      });
      this.tercetos.push(factor);
    }
    return factor;
  }

  parseFactor(): TercetoAbstracto {
    if (this.currentToken && this.currentToken.type === '(') {
      this.eat('(');
      const expresion = this.parseExpression();
      this.eat(')');
      expresion.parentheses = { left: true, right: true };
      return expresion;
    } else if (this.currentToken && this.currentToken.type === 'NUMBER') {
      const numero = new TercetoNumerico(Number(this.currentToken.value), {
        left: false,
        right: false,
      });
      this.eat('NUMBER');
      return numero;
    } else {
      throw new Error('Unexpected token');
    }
  }

  eat(tokenType: string): void {
    if (this.currentToken && this.currentToken.type === tokenType) {
      this.currentToken = this.lexer.getNextToken();
    } else {
      throw new Error(
        `Unexpected token: ${this.currentToken?.type}, expected: ${tokenType}`
      );
    }
  }
}
