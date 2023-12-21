import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import { Lexer, Parser, TercetoAbstracto } from './Parser';
import { IMatrixElement, IMatrixWithName } from './matrix/interfaces';

@Component({
  selector: 'app-operaciones-con-matrices',
  templateUrl: './operaciones-con-matrices.component.html',
  styleUrls: ['./operaciones-con-matrices.component.scss'],
})
export class OperacionesConMatricesComponent implements OnInit {
  public matrices: IMatrixWithName[] = [];

  public readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private deletedMatrices: string[] = [];

  public expressionToCalculate: string = '';
  public latexExpression: string = '';

  public expressionResult: TercetoAbstracto = null;
  public latexExpressionResult: string = '';

  public matricesItems: ListItem[] = [];

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
    this.convertToLatexExpression();
  }

  public removeSymbolToTheExpressionToBeCalculated(): void {
    this.expressionToCalculate = this.expressionToCalculate.slice(0, -1);
    this.convertToLatexExpression();
  }

  public resetExpressionToBeCalculated(): void {
    this.expressionToCalculate = '';
    this.convertToLatexExpression();
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
    // Función para encontrar el máximo común divisor (MCD) de dos números
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

    // Convertir el decimal a fracción
    const numerator: number = decimal * 100;
    const denominator: number = 100;

    // Encontrar el MCD para simplificar la fracción
    const commonDivisor: number = gcd(numerator, denominator);

    // Simplificar la fracción dividiendo tanto el numerador como el denominador por el MCD
    const simplifiedNumerator: number = numerator / commonDivisor;
    const simplifiedDenominator: number = denominator / commonDivisor;

    // Construir la representación de la fracción como cadena
    const fraction: string = `${simplifiedNumerator}\\over${simplifiedDenominator}`;

    if (simplifiedDenominator > 1) {
      return fraction;
    }

    return simplifiedNumerator.toString();
  }

  public onSelectedMatrix(selectedMatrix: any) {
    this.addNewSymbolToTheExpressionToBeCalculated(selectedMatrix.item.content);
    selectedMatrix.item.selected = false;
  }
}
