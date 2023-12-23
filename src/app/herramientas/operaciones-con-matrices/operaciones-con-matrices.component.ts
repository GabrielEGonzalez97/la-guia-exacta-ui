import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import { Lexer } from '../Parser/Lexer';
import { Parser } from '../Parser/Parser';
import { Terceto } from '../Parser/Terceto/Terceto';
import { TercetoAbstracto } from '../Parser/Terceto/TercetoAbstracto';
import { MATRIX_TYPE, NUMBER_TYPE } from '../Parser/constants';
import {
  decimalToFraction,
  getMatrixLatexForm,
  getMatrixLatexWithDecimalsForm,
} from '../commonFunctions';
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

  public isDecimalsIconVisible: boolean = false;
  public isFractionIconVisible: boolean = false;
  public isWarningIconVisible: boolean = false;

  public errorMessage: string = '';

  private parser: Parser = null;
  public steps: string[] = [];

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
      this.matricesItems = this.matricesItems.filter(
        (item: ListItem) => item.content !== matrixName
      );
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
    this.isDecimalsIconVisible = false;
    this.isFractionIconVisible = false;
    this.isWarningIconVisible = false;
    if (this.expressionToCalculate) {
      try {
        const lexer: Lexer = new Lexer(this.expressionToCalculate);
        this.parser = new Parser(lexer, this.matrices);

        this.parser.parse();

        this.expressionResult = this.parser.getResultado();

        this.latexExpression = `$${this.expressionResult.getLatexForm()}$`;
        const lastChar: string = this.expressionToCalculate.trim().slice(-1);
        if (lastChar == '.') {
          this.latexExpression = `$${this.expressionResult.getLatexForm()}${lastChar}$`;
        }

        this.isLastTokenAFloat = this.parser.isLastTokenAFloat;
      } catch (error) {
        this.latexExpression = `$${this.expressionToCalculate}$`;
      }
    } else {
      this.latexExpression = '';
    }
  }

  public calculate(): void {
    this.calculateResultInFraction();
    this.calculateSteps();
  }

  public calculateResultInFraction(): void {
    try {
      const expressionResultType: string =
        this.expressionResult.getTercetoType();
      if (expressionResultType === NUMBER_TYPE) {
        this.latexExpressionResult = `$${decimalToFraction(
          Number(this.expressionResult.getResultado())
        )}$`;
      } else if (expressionResultType === MATRIX_TYPE) {
        this.latexExpressionResult = `$${getMatrixLatexForm(
          this.expressionResult.getResultado() as IMatrixElement[][]
        )}$`;
      }
      this.isDecimalsIconVisible = true;
      this.isFractionIconVisible = false;
      this.isWarningIconVisible = false;
    } catch (error) {
      this.isWarningIconVisible = true;
      this.errorMessage = error.message;
    }
  }

  public calculateResultInDecimals(): void {
    try {
      const expressionResultType: string =
        this.expressionResult.getTercetoType();
      if (expressionResultType === NUMBER_TYPE) {
        this.latexExpressionResult = `$${Number(
          this.expressionResult.getResultado()
        )}$`;
      } else if (expressionResultType === MATRIX_TYPE) {
        this.latexExpressionResult = `$${getMatrixLatexWithDecimalsForm(
          this.expressionResult.getResultado() as IMatrixElement[][]
        )}$`;
      }
      this.isDecimalsIconVisible = false;
      this.isFractionIconVisible = true;
      this.isWarningIconVisible = false;
    } catch (error) {
      this.isWarningIconVisible = true;
      this.errorMessage = error.message;
    }
  }

  public onSelectedMatrix(selectedMatrix: any) {
    this.addNewSymbolToTheExpressionToBeCalculated(selectedMatrix.item.content);
    selectedMatrix.item.selected = false;
  }

  public getCorrectFormToDisplay(terceto: Terceto): string {
    const type: string = terceto.getTercetoType();
    let result: string = '';
    if (type === NUMBER_TYPE) {
      result = decimalToFraction(Number(terceto.getResultado()));
    } else if (type === MATRIX_TYPE) {
      result = getMatrixLatexForm(terceto.getResultado() as IMatrixElement[][]);
    }
    return result;
  }

  public calculateSteps(): void {
    console.log(this.parser.getTercetos());
    const tercetos: Terceto[] = this.parser.getTercetos() as Terceto[];
    tercetos.forEach((terceto: Terceto) => {
      const operand1Result: string = this.getCorrectFormToDisplay(
        terceto.operand1 as Terceto
      );
      const operand2Result: string = this.getCorrectFormToDisplay(
        terceto.operand2 as Terceto
      );
      try {
        const result: string = this.getCorrectFormToDisplay(terceto as Terceto);
        const commonText: string = `$${operand1Result}$ y $${operand2Result}$ dando como resultado $${result}$`;
        if (terceto.operator === '+') {
          this.steps.push(`Se realiza la suma entre ${commonText}`);
        } else if (terceto.operator === '-') {
          this.steps.push(`Se realiza la resta entre ${commonText}`);
        } else if (terceto.operator === '*') {
          this.steps.push(`Se realiza la multiplicación entre ${commonText}`);
        } else if (terceto.operator === '/') {
          this.steps.push(`Se realiza la división entre ${commonText}`);
        }
      } catch (error) {
        this.steps.push(
          `Se produce el error: ${error} al hacer la cuenta $${operand1Result}$ ${terceto.operator} $${operand2Result}$`
        );
        throw Error(
          'No es posible seguir calculando los pasos debido a un error previo'
        );
      }
    });
    console.log(this.steps);
  }
}
