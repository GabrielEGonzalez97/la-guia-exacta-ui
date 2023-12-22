import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import Fraction from 'fraction.js';
import { Lexer, Parser, TercetoAbstracto } from './Parser';
import { IMatrixElement, IMatrixWithName } from './matrix/interfaces';

@Component({
  selector: 'app-operaciones-con-matrices',
  templateUrl: './operaciones-con-matrices.component.html',
  styleUrls: ['./operaciones-con-matrices.component.scss'],
})
export class OperacionesConMatricesComponent implements OnInit {
  public readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  public matrices: IMatrixWithName[] = [];
  private deletedMatrices: string[] = [];

  public expressionToCalculate: string = '';
  public latexExpression: string = '';

  public expressionResult: TercetoAbstracto = null;
  public latexExpressionResult: string = '';

  public matricesItems: ListItem[] = [];

  public isExpressionToCalculateEmpty: boolean = true;
  public isLastSymbolAnOperator: boolean = false;
  public isLastTokenAFloat: boolean = false;

  constructor() {}

  public ngOnInit(): void {
    this.addNewMatrix();
  }

  private createEmptyMatrix(): IMatrixElement[][] {
    return [
      [{ value: '' }, { value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }, { value: '' }],
      [{ value: '' }, { value: '' }, { value: '' }],
    ];
  }

  public updateMatrix(updatedMatrix: IMatrixWithName): void {
    const indexMatrixToUpdate: number = this.matrices.findIndex(
      (matrix: IMatrixWithName) => matrix.name === updatedMatrix.name
    );
    if (indexMatrixToUpdate !== -1) {
      this.matrices[indexMatrixToUpdate].matrix = updatedMatrix.matrix;
    }
    this.convertToLatexExpression();
  }

  public addNewMatrix(): void {
    let newMatrix: string = '';

    if (this.deletedMatrices.length > 0) {
      newMatrix = this.deletedMatrices.shift();
    } else {
      newMatrix = this.alphabet[this.matrices.length];
    }

    this.matrices.push({ name: newMatrix, matrix: this.createEmptyMatrix() });
    this.matricesItems = [
      ...this.matricesItems,
      {
        content: newMatrix,
        selected: false,
      },
    ];
  }

  public deleteMatrix(matrixName: string): void {
    const indexMatrixToDelete: number = this.matrices.findIndex(
      (matrix: IMatrixWithName) => matrix.name === matrixName
    );

    if (indexMatrixToDelete !== -1) {
      const deletedMatrix = this.matrices.splice(indexMatrixToDelete, 1)[0];
      this.deletedMatrices.push(deletedMatrix.name);
      this.deletedMatrices.sort();
    } else {
      console.log(`La matriz ${matrixName} no existe.`);
    }
  }

  public addNewSymbolToTheExpressionToBeCalculated(newSymbol: string): void {
    this.expressionToCalculate += newSymbol;
    this.checkLastSymbol();
    this.convertToLatexExpression();
  }

  public removeSymbolToTheExpressionToBeCalculated(): void {
    this.expressionToCalculate = this.expressionToCalculate.slice(0, -1);
    this.checkLastSymbol();
    this.convertToLatexExpression();
  }

  public resetExpressionToBeCalculated(): void {
    this.expressionToCalculate = '';
    this.checkLastSymbol();
    this.convertToLatexExpression();
  }

  private checkLastSymbol(): void {
    const operators: string[] = ['+', '-', '*', '/'];

    const lastChar: string = this.expressionToCalculate.trim().slice(-1);

    this.isExpressionToCalculateEmpty = !this.expressionToCalculate
      ? true
      : false;
    this.isLastSymbolAnOperator = operators.includes(lastChar);
  }

  private convertToLatexExpression(): void {
    this.latexExpressionResult = '';
    if (this.expressionToCalculate) {
      try {
        const lexer: Lexer = new Lexer(this.expressionToCalculate);
        const parser: Parser = new Parser(lexer, this.matrices);

        parser.parse();

        this.expressionResult = parser.getResultado();

        this.latexExpression = `$${this.expressionResult.getLatexForm()}$`;
        const lastChar: string = this.expressionToCalculate.trim().slice(-1);
        if (lastChar == '.') {
          this.latexExpression = `$${this.expressionResult.getLatexForm()}${lastChar}$`;
        }

        this.isLastTokenAFloat = parser.isLastTokenAFloat;
      } catch (e) {
        this.latexExpression = `$${this.expressionToCalculate}$`;
      }
    } else {
      this.latexExpression = '';
    }
  }

  public calculate(): void {
    this.latexExpressionResult = `$${this.decimalToFraction(
      this.expressionResult.getResultado()
    )}$`;
  }

  private decimalToFraction(decimal: number): string {
    const fraction: Fraction = new Fraction(decimal);

    const numerator: number = fraction.n;
    const denominator: number = fraction.d;

    const fractionString: string = `${numerator}\\over${denominator}`;

    if (denominator > 1) {
      return fractionString;
    }

    return numerator.toString();
  }

  public onSelectedMatrix(selectedMatrix: any) {
    this.addNewSymbolToTheExpressionToBeCalculated(selectedMatrix.item.content);
    selectedMatrix.item.selected = false;
  }
}
