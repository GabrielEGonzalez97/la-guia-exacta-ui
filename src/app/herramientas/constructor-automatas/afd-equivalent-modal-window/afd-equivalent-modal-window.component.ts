import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { AFDEquivalentTableModel } from './AFDEquivalentTableModel';

@Component({
  selector: 'app-afd-equivalent-modal-window',
  templateUrl: './afd-equivalent-modal-window.component.html',
  styleUrls: ['./afd-equivalent-modal-window.component.scss'],
})
export class AFDEquivalentModalWindowComponent
  extends BaseModal
  implements OnInit
{
  public AFDEquivalentTableModel: AFDEquivalentTableModel = null;
  public renownedStatesTableModel: AFDEquivalentTableModel = null;

  public renownedStates: Map<string, string> = new Map<string, string>();

  constructor(
    @Inject('headerTemplate')
    private headerTemplate: TemplateRef<unknown>,
    @Inject('columnTemplate')
    private columnTemplate: TemplateRef<unknown>,
    @Inject('matrizTransicionEstadosHeader')
    public matrizTransicionEstadosHeader: string[],
    @Inject('AFDEquivalent')
    public AFDEquivalent: string[][]
  ) {
    super();
    this.AFDEquivalentTableModel = new AFDEquivalentTableModel(
      this.headerTemplate,
      this.columnTemplate,
      this.matrizTransicionEstadosHeader,
      this.AFDEquivalent
    );
  }

  public ngOnInit(): void {
    this.AFDEquivalent.forEach((row: string[], index: number) => {
      this.renownedStates.set(`${row[0]}`, `q${index}`);
    });

    this.renownedStatesTableModel = new AFDEquivalentTableModel(
      this.headerTemplate,
      this.columnTemplate,
      this.matrizTransicionEstadosHeader,
      this.AFDEquivalent.map((row: string[]) =>
        row.map((element: string) => this.renownedStates.get(element))
      )
    );
  }

  public getKeyValues(): { key: string; value: string }[] {
    return Array.from(this.renownedStates.entries()).map((entry) => ({
      key: entry[0],
      value: entry[1],
    }));
  }
}
