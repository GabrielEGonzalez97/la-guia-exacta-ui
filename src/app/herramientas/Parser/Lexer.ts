import { Token } from './Token';
import { COS_TYPE, MATRIX_TYPE, NUMBER_TYPE } from './constants';

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

    const currentChar: string = this.input[this.currentPos];

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

    if ('abcdefghijklmnopqrstuvwxyz'.includes(currentChar)) {
      let identifier: string = '';
      while (/[a-z0-9]/.test(this.input[this.currentPos])) {
        identifier += this.input[this.currentPos];
        this.currentPos++;
      }

      // Check if it's a unary function
      if (this.isFunction(identifier)) {
        return new Token(COS_TYPE, identifier);
      }
    }

    if ('+-*/()'.includes(currentChar)) {
      this.currentPos++;
      return new Token(currentChar, currentChar);
    }

    this.currentPos++;
    return this.getNextToken();
  }

  private isFunction(name: string): boolean {
    const unaryFunctions: string[] = [COS_TYPE];
    return unaryFunctions.includes(name);
  }
}
