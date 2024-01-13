import { Component, OnInit } from '@angular/core';
import { ListItem, ModalService } from 'carbon-components-angular';
import { Lexer } from '../Parser/Lexer';
import { Parser } from '../Parser/Parser';
import { Terceto } from '../Parser/Terceto/Terceto';
import { TercetoAbstracto } from '../Parser/Terceto/TercetoAbstracto';
import { TercetoOperator } from '../Parser/Terceto/TercetoOperator';
import {
  COS_TYPE,
  MATRIX_TYPE,
  MAT_INV_TYPE,
  NUMBER_TYPE,
  SIN_TYPE,
  TAN_TYPE,
  TRANSPUESTA_TYPE,
} from '../Parser/constants';
import {
  decimalToFraction,
  getCorrectFormToDisplay,
  getMatrixLatexForm,
  getMatrixLatexWithDecimalsForm,
} from '../commonFunctions';
import { ICalculationStep } from './interfaces';
import { IMatrixElement, IMatrixWithName } from './matrix/interfaces';
import { StepByStepModalWindowComponent } from './step-by-step-modal-window/step-by-step-modal-window.component';

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

  public steps: ICalculationStep[] = [];

  public openParenthesesCounter: number = 0;
  public closedParenthesesCounter: number = 0;

  public isExpressionToCalculateEmpty: boolean = true;
  public isLastSymbolAOpenParentheses: boolean = false;
  public isLastSymbolAClosedParentheses: boolean = false;
  public isLastSymbolAnOperator: boolean = false;
  public isLastTokenANumber: boolean = false;
  public isLastTokenAFloat: boolean = false;
  public isLastTokenAMatrix: boolean = false;

  public isDecimalsIconVisible: boolean = false;
  public isFractionIconVisible: boolean = false;
  public isWarningIconVisible: boolean = false;

  public errorMessage: string = '';

  private parser: Parser = null;

  constructor(private modalService: ModalService) {}

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
    if (newSymbol.includes('(')) {
      this.openParenthesesCounter++;
    } else if (newSymbol === ')') {
      this.closedParenthesesCounter++;
    }
  }

  public removeSymbolToTheExpressionToBeCalculated(): void {
    const lastChar: string = this.expressionToCalculate.trim().slice(-1);
    this.expressionToCalculate = this.expressionToCalculate.slice(0, -1);
    const lexer: Lexer = new Lexer(this.expressionToCalculate);
    this.parser = new Parser(lexer, this.matrices);
    this.checkLastSymbol();
    this.convertToLatexExpression();
    if (lastChar === '(') {
      if (this.openParenthesesCounter > 0) {
        this.openParenthesesCounter--;
      }
    } else if (lastChar === ')') {
      if (this.closedParenthesesCounter > 0) {
        this.closedParenthesesCounter--;
      }
    }
  }

  public resetExpressionToBeCalculated(): void {
    this.expressionToCalculate = '';
    this.openParenthesesCounter = 0;
    this.closedParenthesesCounter = 0;
    this.isLastTokenANumber = false;
    this.isLastTokenAFloat = false;
    this.isLastTokenAMatrix = false;
    this.checkLastSymbol();
    this.convertToLatexExpression();
  }

  private checkLastSymbol(): void {
    const operators: string[] = ['+', '-', '*', '/', '^'];

    const lastChar: string = this.expressionToCalculate.trim().slice(-1);

    this.isExpressionToCalculateEmpty = !this.expressionToCalculate
      ? true
      : false;
    this.isLastSymbolAnOperator = operators.includes(lastChar);

    this.isLastSymbolAOpenParentheses = false;
    this.isLastSymbolAClosedParentheses = false;
    if (lastChar === '(') {
      this.isLastSymbolAOpenParentheses = true;
    } else if (lastChar === ')') {
      this.isLastSymbolAClosedParentheses = true;
    }
  }

  private convertToLatexExpression(): void {
    this.latexExpressionResult = '';
    this.steps = [];
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
      } catch (error) {
        this.errorMessage = error.message;
        this.latexExpression = `$${this.expressionToCalculate}$`;
      }

      this.isLastTokenANumber = this.parser
        ? this.parser.isLastTokenANumber
        : false;
      this.isLastTokenAFloat = this.parser
        ? this.parser.isLastTokenAFloat
        : false;
      this.isLastTokenAMatrix = this.parser
        ? this.parser.isLastTokenAMatrix
        : false;
    } else {
      this.latexExpression = '';
      this.openParenthesesCounter = 0;
      this.closedParenthesesCounter = 0;
      this.isLastTokenANumber = false;
      this.isLastTokenAFloat = false;
      this.isLastTokenAMatrix = false;
    }
  }

  public calculate(): void {
    this.calculateResultInFraction();
    this.calculateSteps();
  }

  public calculateResultInFraction(): void {
    try {
      if (this.expressionResult) {
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
      } else {
        this.isWarningIconVisible = true;
      }
    } catch (error) {
      this.isWarningIconVisible = true;
      this.errorMessage = error.message;
    }
  }

  public calculateResultInDecimals(): void {
    try {
      if (this.expressionResult) {
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
      } else {
        this.isWarningIconVisible = true;
      }
    } catch (error) {
      this.isWarningIconVisible = true;
      this.errorMessage = error.message;
    }
  }

  public onSelectedMatrix(selectedMatrix: any) {
    this.addNewSymbolToTheExpressionToBeCalculated(selectedMatrix.item.content);
    selectedMatrix.item.selected = false;
  }

  private replaceFirstOccurrence(
    original: string,
    search: string,
    replace: string
  ): string {
    // Find the position of the first occurrence of the substring
    const index: number = original.indexOf(search);

    // Check if the substring was found
    if (index !== -1) {
      // Build the new string with the replaced substring
      const newString: string =
        original.substring(0, index) +
        replace +
        original.substring(index + search.length);

      return newString;
    }

    // If the substring was not found, return the original string
    return original;
  }

  public calculateSteps(): void {
    this.steps = [];
    const tercetos: TercetoOperator[] =
      this.parser.getTercetos() as TercetoOperator[];
    tercetos.forEach((terceto: TercetoOperator, index: number) => {
      const stepNumber: number = index + 1;
      try {
        const result: string = getCorrectFormToDisplay(terceto);
        const commonText: string = `${terceto.getLatexFormOperators()} dando como resultado $${result}$`;
        const lastPartialExpression: string = this.steps.slice(-1)[0]
          ? this.steps.slice(-1)[0].latexExpression
          : this.latexExpression;
        let newPartialExpression: string = this.replaceFirstOccurrence(
          lastPartialExpression,
          terceto.getLatexFormResult(),
          result
        );

        // console.log({ lastPartialExpression });
        // console.log(terceto.getLatexFormResult());
        // console.log({ result });
        // console.log({ newPartialExpression });
        // console.log('');
        if (stepNumber === tercetos.length) {
          newPartialExpression = `$${result}$`;
        }
        if (terceto.operator === '+') {
          this.steps.push({
            description: `Se calcula la suma entre ${commonText}`,
            latexExpression: newPartialExpression,
            intermediateSteps: terceto.getIntermediateSteps(),
          });
        } else if (terceto.operator === '-') {
          this.steps.push({
            description: `Se calcula la resta entre ${commonText}`,
            latexExpression: newPartialExpression,
            intermediateSteps: terceto.getIntermediateSteps(),
          });
        } else if (terceto.operator === '*') {
          this.steps.push({
            description: `Se calcula la multiplicación entre ${commonText}`,
            latexExpression: newPartialExpression,
            intermediateSteps: terceto.getIntermediateSteps(),
          });
        } else if (terceto.operator === '/') {
          this.steps.push({
            description: `Se calcula la división entre ${commonText}`,
            latexExpression: newPartialExpression,
          });
        } else if (terceto.operator === '^') {
          this.steps.push({
            description: `Se calcula la potencia ${getCorrectFormToDisplay(
              (terceto as Terceto).operand2
            )} de ${getCorrectFormToDisplay((terceto as Terceto).operand1)}`,
            latexExpression: newPartialExpression,
            intermediateSteps: terceto.getIntermediateSteps(),
          });
        } else if (terceto.operator === COS_TYPE) {
          this.steps.push({
            description: `Se calcula el coseno de ${commonText}`,
            latexExpression: newPartialExpression,
          });
        } else if (terceto.operator === SIN_TYPE) {
          this.steps.push({
            description: `Se calcula el seno de ${commonText}`,
            latexExpression: newPartialExpression,
          });
        } else if (terceto.operator === TAN_TYPE) {
          this.steps.push({
            description: `Se calcula la tangente de ${commonText}`,
            latexExpression: newPartialExpression,
          });
        } else if (terceto.operator === MAT_INV_TYPE) {
          this.steps.push({
            description: `Se calcula la matriz inversa de ${commonText}`,
            latexExpression: newPartialExpression,
          });
        } else if (terceto.operator === TRANSPUESTA_TYPE) {
          this.steps.push({
            description: `Se calcula la matriz transpuesta de ${commonText}`,
            latexExpression: newPartialExpression,
            intermediateSteps: terceto.getIntermediateSteps(),
          });
        }
      } catch (error) {
        this.steps.push({
          description: `Se produce el error: ${error} al hacer la cuenta $${terceto.getLatexFormResult()}$`,
          latexExpression: '',
        });
        throw new Error(
          'No es posible seguir calculando los pasos debido a un error previo'
        );
      }
    });
  }

  public showStepByStepModalWindow(): void {
    this.modalService.create({
      component: StepByStepModalWindowComponent,
      inputs: {
        steps: this.steps,
        latexExpression: this.latexExpression,
      },
    });
  }
}
