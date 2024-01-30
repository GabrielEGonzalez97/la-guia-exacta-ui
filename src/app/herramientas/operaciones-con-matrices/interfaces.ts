export interface ICalculationStep {
  description: string;
  initialLatexExpression?: string;
  resultingExpression?: string;
  latexExpression: string;
  intermediateSteps?: ICalculationStep[];
}

export interface IDropdownWithFunctionToCall {
  content: string;
  selected: boolean;
  functionToCall: string;
}

export interface IDropdownWithFunctionToCallSelected {
  isUpdate: boolean;
  item: IDropdownWithFunctionToCall;
}
