import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { ParsingService } from 'src/app/services/parsing.service';
import { AgregarNoTerminalModalWindowComponent } from './agregar-no-terminal-modal-window/agregar-no-terminal-modal-window.component';
import { AgregarTerminalModalWindowComponent } from './agregar-terminal-modal-window/agregar-terminal-modal-window.component';

@Component({
  selector: 'app-parsing-ascendente',
  templateUrl: './parsing-ascendente.component.html',
  styleUrls: ['./parsing-ascendente.component.scss'],
})
export class ParsingAscendenteComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private parsingService: ParsingService
  ) {}

  public ngOnInit(): void {}

  public showAgregarTerminalModalWindow(): void {
    this.modalService.create({
      component: AgregarTerminalModalWindowComponent,
    });
  }

  public showAgregarNoTerminalModalWindow(): void {
    this.modalService.create({
      component: AgregarNoTerminalModalWindowComponent,
    });
  }

  public getParsingAscendenteTerminales(): string[] {
    return this.parsingService.getParsingAscendenteTerminales();
  }

  public getParsingAscendenteNoTerminales(): string[] {
    return this.parsingService.getParsingAscendenteNoTerminales();
  }

  public removeParsingAscendenteTerminal(terminal: string): void {
    this.parsingService.removeParsingAscendenteTerminal(terminal);
  }

  public removeParsingAscendenteNoTerminal(noTerminal: string): void {
    this.parsingService.removeParsingAscendenteNoTerminal(noTerminal);
  }
}
