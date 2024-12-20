import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { ParsingService } from 'src/app/services/parsing.service';

const EMPTY_STRING_INVALID_TEXT: string = 'El terminal debe tener un valor';

@Component({
  selector: 'app-agregar-terminal-modal-window',
  templateUrl: './agregar-terminal-modal-window.component.html',
  styleUrls: ['./agregar-terminal-modal-window.component.scss'],
})
export class AgregarTerminalModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public terminal: string = '';
  public isInvalidTerminal: boolean = true;
  public invalidText: string = EMPTY_STRING_INVALID_TEXT;

  constructor(private parsingService: ParsingService) {
    super();
  }

  public ngOnInit(): void {}

  public onTerminalInput(): void {
    if (this.terminal.length === 0) {
      this.isInvalidTerminal = true;
      this.invalidText = EMPTY_STRING_INVALID_TEXT;
    } else if (
      this.parsingService.hasParsingAscendenteTerminal(this.terminal)
    ) {
      this.isInvalidTerminal = true;
      this.invalidText = 'Ya agregaste este terminal';
    } else {
      this.isInvalidTerminal = false;
    }
  }

  public onEnterKeyPress(): void {
    if (!this.isInvalidTerminal && this.terminal.length > 0) {
      this.addNewTerminal();
    }
  }

  public addNewTerminal(): void {
    this.parsingService.addParsingAscendenteTerminal(this.terminal);
    this.terminal = '';
    this.isInvalidTerminal = true;
    this.invalidText = EMPTY_STRING_INVALID_TEXT;
  }
}
