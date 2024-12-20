import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { ParsingService } from 'src/app/services/parsing.service';

const EMPTY_STRING_INVALID_TEXT: string = 'El no terminal debe tener un valor';

@Component({
  selector: 'app-agregar-no-terminal-modal-window',
  templateUrl: './agregar-no-terminal-modal-window.component.html',
  styleUrls: ['./agregar-no-terminal-modal-window.component.scss'],
})
export class AgregarNoTerminalModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public noTerminal: string = '';
  public isInvalidNoTerminal: boolean = true;
  public invalidText: string = EMPTY_STRING_INVALID_TEXT;

  constructor(private parsingService: ParsingService) {
    super();
  }

  public ngOnInit(): void {}

  public onNoTerminalInput(): void {
    if (this.noTerminal.length === 0) {
      this.isInvalidNoTerminal = true;
      this.invalidText = EMPTY_STRING_INVALID_TEXT;
    } else if (
      this.parsingService.hasParsingAscendenteNoTerminal(this.noTerminal)
    ) {
      this.isInvalidNoTerminal = true;
      this.invalidText = 'Ya agregaste este terminal';
    } else {
      this.isInvalidNoTerminal = false;
    }
  }

  public onEnterKeyPress(): void {
    if (!this.isInvalidNoTerminal && this.noTerminal.length > 0) {
      this.addNewNoTerminal();
    }
  }

  public addNewNoTerminal(): void {
    this.parsingService.addParsingAscendenteNoTerminal(this.noTerminal);
    this.noTerminal = '';
    this.isInvalidNoTerminal = true;
    this.invalidText = EMPTY_STRING_INVALID_TEXT;
  }
}
