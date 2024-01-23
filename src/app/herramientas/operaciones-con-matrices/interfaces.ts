export interface ICalculationStep {
  description: string;
  initialLatexExpression?: string;
  resultingExpression?: string;
  latexExpression: string;
  intermediateSteps?: ICalculationStep[];
}
