import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParsingService {
  private parsingAscendenteTerminales: string[] = [];

  constructor() {}

  public addParsingAscendenteTerminal(terminal: string): boolean {
    if (!this.hasParsingAscendenteTerminal(terminal)) {
      this.parsingAscendenteTerminales.push(terminal);
      return true;
    }
    return false;
  }

  public hasParsingAscendenteTerminal(terminal: string): boolean {
    return this.parsingAscendenteTerminales.includes(terminal);
  }

  public removeParsingAscendenteTerminal(terminal: string): boolean {
    const index: number = this.parsingAscendenteTerminales.indexOf(terminal);
    if (index !== -1) {
      this.parsingAscendenteTerminales.splice(index, 1);
      return true;
    }
    return false;
  }

  public getParsingAscendenteTerminales(): string[] {
    return [...this.parsingAscendenteTerminales];
  }
}
