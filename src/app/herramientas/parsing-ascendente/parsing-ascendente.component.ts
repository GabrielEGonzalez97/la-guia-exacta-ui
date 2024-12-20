import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { ParsingService } from 'src/app/services/parsing.service';
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

  public getParsingAscendenteTerminales(): string[] {
    return this.parsingService.getParsingAscendenteTerminales();
  }
}
