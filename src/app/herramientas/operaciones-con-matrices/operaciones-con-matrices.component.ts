import { Component, OnInit } from '@angular/core';
import { ListItem, ModalService } from 'carbon-components-angular';
import { Lexer } from '../Parser/Lexer';
import { Parser } from '../Parser/Parser';
import { TercetoAbstracto } from '../Parser/Terceto/TercetoAbstracto';
import { TercetoOperator } from '../Parser/Terceto/TercetoAbstractoImplementations/TercetoOperator';
import {
  DETERMINANTE_2_x_2_TYPE,
  DETERMINANTE_CUARTA_COLUMNA_TYPE,
  DETERMINANTE_CUARTA_FILA_TYPE,
  DETERMINANTE_PRIMERA_COLUMNA_TYPE,
  DETERMINANTE_PRIMERA_FILA_TYPE,
  DETERMINANTE_QUINTA_COLUMNA_TYPE,
  DETERMINANTE_QUINTA_FILA_TYPE,
  DETERMINANTE_SARRUS_TYPE,
  DETERMINANTE_SEGUNDA_COLUMNA_TYPE,
  DETERMINANTE_SEGUNDA_FILA_TYPE,
  DETERMINANTE_TERCERA_COLUMNA_TYPE,
  DETERMINANTE_TERCERA_FILA_TYPE,
  MATRIX_TYPE,
  NUMBER_TYPE,
  UNARY_FUNCTIONS,
} from '../Parser/constants';
import {
  decimalToFraction,
  getCorrectFormToDisplay,
  getMatrixLatexForm,
  getMatrixLatexWithDecimalsForm,
} from '../commonFunctions';
import { COLOR_TO_HIGHLIGHT_RESULTS } from '../constants';
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
  public determinantesItems: ListItem[] = [
    {
      content: '2x2',
      selected: false,
    },
    {
      content: 'Sarrus',
      selected: false,
    },
    {
      content: '1ra columna',
      selected: false,
    },
    {
      content: '2da columna',
      selected: false,
    },
    {
      content: '3ra columna',
      selected: false,
    },
    {
      content: '4ta columna',
      selected: false,
    },
    {
      content: '5ta columna',
      selected: false,
    },
    {
      content: '1ra fila',
      selected: false,
    },
    {
      content: '2da fila',
      selected: false,
    },
    {
      content: '3ra fila',
      selected: false,
    },
    {
      content: '4ta fila',
      selected: false,
    },
    {
      content: '5ta fila',
      selected: false,
    },
  ];

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

  public isThereAResult: boolean = false;

  public errorMessage: string = '';

  public letterUsedToRepresentAnswerMatrix: string = 'Ñ';

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

  public onSelectedAns(): void {
    if (this.expressionResult) {
      const expressionResultType: string =
        this.expressionResult.getTercetoType();
      if (expressionResultType === NUMBER_TYPE) {
        this.addNewSymbolToTheExpressionToBeCalculated(
          this.expressionResult.getResultado().toString()
        );
      } else if (expressionResultType === MATRIX_TYPE) {
        const ansIndex: number = this.matrices.findIndex(
          (mat: IMatrixWithName) =>
            mat.name === this.letterUsedToRepresentAnswerMatrix
        );
        const deepCopy: IMatrixElement[][] = JSON.parse(
          JSON.stringify(
            (this.expressionResult.getResultado() as IMatrixElement[][]).map(
              (row: IMatrixElement[]) => row.map((element) => ({ ...element }))
            )
          )
        );

        if (ansIndex !== -1) {
          // Si ya existe una matriz con el nombre letterUsedToRepresentAnswerMatrix, reemplaza su valor
          this.matrices[ansIndex].matrix = deepCopy;
        } else {
          // Si no existe una matriz con el nombre letterUsedToRepresentAnswerMatrix, agrégala a la lista de matrices
          this.matrices.push({
            name: this.letterUsedToRepresentAnswerMatrix,
            matrix: deepCopy,
          });
        }
        this.addNewSymbolToTheExpressionToBeCalculated(
          this.letterUsedToRepresentAnswerMatrix
        );
      }
    }
  }

  public addNewSymbolToTheExpressionToBeCalculated(newSymbol: string): void {
    this.expressionToCalculate += newSymbol;
    if (newSymbol.includes('(')) {
      this.openParenthesesCounter++;
    } else if (newSymbol === ')') {
      this.closedParenthesesCounter++;
    }
    this.checkLastSymbol();
    this.convertToLatexExpression();
  }

  public removeSymbolToTheExpressionToBeCalculated(): void {
    let lastToken: string = '';
    if (this.expressionToCalculate.length >= 4) {
      const lastFourCharacters: string = this.expressionToCalculate.substring(
        this.expressionToCalculate.length - 4
      );
      const functionName: string = lastFourCharacters.substring(0, 3);
      if (UNARY_FUNCTIONS.includes(functionName)) {
        lastToken = lastFourCharacters;
        this.openParenthesesCounter--;
      } else {
        lastToken = this.expressionToCalculate.trim().slice(-1);
      }
    } else {
      lastToken = this.expressionToCalculate.trim().slice(-1);
    }

    const lastIndex: number = this.expressionToCalculate.lastIndexOf(lastToken);
    if (lastIndex !== -1) {
      this.expressionToCalculate =
        this.expressionToCalculate.substring(0, lastIndex) +
        this.expressionToCalculate.substring(lastIndex + lastToken.length);
    }

    if (lastToken === '(') {
      if (this.openParenthesesCounter > 0) {
        this.openParenthesesCounter--;
      }
    } else if (lastToken === ')') {
      if (this.closedParenthesesCounter > 0) {
        this.closedParenthesesCounter--;
      }
    }
    this.checkLastSymbol();
    this.convertToLatexExpression();
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
    const operators: string[] = ['=', '+', '-', '*', '/', '^'];

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

      this.isLastTokenANumber = this.parser.getResultado()
        ? this.parser.getResultado().getTercetoType() === NUMBER_TYPE
        : false;
      this.isLastTokenAFloat = this.parser
        ? this.parser.isLastTokenAFloat
        : false;
      this.isLastTokenAMatrix = this.parser.getResultado()
        ? this.parser.getResultado().getTercetoType() === MATRIX_TYPE
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
        this.isThereAResult = true;
      } else {
        this.isWarningIconVisible = true;
        this.isThereAResult = false;
      }
    } catch (error) {
      this.isThereAResult = false;
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

  public onSelectedMatrix(selectedMatrix: any): void {
    this.addNewSymbolToTheExpressionToBeCalculated(selectedMatrix.item.content);
    selectedMatrix.item.selected = false;
  }

  public onSelectedDeterminante(selectedDeterminante: any): void {
    if (selectedDeterminante.item.content === '2x2') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_2_x_2_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === 'Sarrus') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_SARRUS_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '1ra columna') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_PRIMERA_COLUMNA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '2da columna') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_SEGUNDA_COLUMNA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '3ra columna') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_TERCERA_COLUMNA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '4ta columna') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_CUARTA_COLUMNA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '5ta columna') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_QUINTA_COLUMNA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '1ra fila') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_PRIMERA_FILA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '2da fila') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_SEGUNDA_FILA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '3ra fila') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_TERCERA_FILA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '4ta fila') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_CUARTA_FILA_TYPE}(`
      );
    } else if (selectedDeterminante.item.content === '5ta fila') {
      this.addNewSymbolToTheExpressionToBeCalculated(
        `${DETERMINANTE_QUINTA_FILA_TYPE}(`
      );
    }
    selectedDeterminante.item.selected = false;
  }

  private getNewPartialExpression(
    original: string,
    search: string,
    replace: string,
    useColor: boolean
  ): string {
    // Find the position of the first occurrence of the substring
    const index: number = original.indexOf(search);
    replace = useColor
      ? `\\textcolor{${COLOR_TO_HIGHLIGHT_RESULTS}}{${replace}}`
      : replace;

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

  private getInitialPartialExpression(
    original: string,
    search: string
  ): string {
    // Find the position of the first occurrence of the substring
    const index: number = original.indexOf(search);

    // Check if the substring was found
    if (index !== -1) {
      const newString: string =
        original.substring(0, index) +
        `\\textcolor{${COLOR_TO_HIGHLIGHT_RESULTS}}{${search}}` +
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
        const lastPartialExpression: string = this.steps.slice(-1)[0]
          ? this.steps.slice(-1)[0].latexExpression
          : this.latexExpression;

        let initialLatexExpression: string = this.getInitialPartialExpression(
          lastPartialExpression,
          terceto.getLatexFormResult()
        );

        let newPartialExpression: string = this.getNewPartialExpression(
          lastPartialExpression,
          terceto.getLatexFormResult(),
          result,
          false
        );

        let resultingExpression: string = this.getNewPartialExpression(
          lastPartialExpression,
          terceto.getLatexFormResult(),
          result,
          true
        );

        if (stepNumber === tercetos.length) {
          newPartialExpression = `$${result}$`;
        }
        this.steps.push({
          description: terceto.getDescription(),
          initialLatexExpression: initialLatexExpression,
          resultingExpression: resultingExpression,
          latexExpression: newPartialExpression,
          intermediateSteps: terceto.getIntermediateSteps(),
        });
      } catch (error) {
        this.steps.push({
          description: `Se produce el error: ${error} al hacer la cuenta $${terceto.getLatexFormResult()}$`,
          latexExpression:
            terceto.getIntermediateSteps()[
              terceto.getIntermediateSteps().length - 1
            ].latexExpression,
          intermediateSteps: terceto.getIntermediateSteps(),
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
