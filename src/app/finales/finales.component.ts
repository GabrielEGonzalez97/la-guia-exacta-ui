import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.scss'],
})
export class FinalesComponent implements OnInit {
  public finales = [
    { filePath: '/assets/Finales/Final_2011_Marzo.pdf', showFile: false },
    { filePath: '/assets/Finales/Final_2014_Diciembre.pdf', showFile: false },
    { filePath: '/assets/Finales/Final_2014_Marzo.pdf', showFile: false },
    {
      filePath: '/assets/Finales/Final_2017_Febrero_1er_llamado.pdf',
      showFile: false,
    },
    {
      filePath: '/assets/Finales/Final_2017_Febrero_2do_llamado.pdf',
      showFile: false,
    },
    { filePath: '/assets/Finales/Final_2019_Diciembre.pdf', showFile: false },
    { filePath: '/assets/Finales/Final_2019_Septiembre.pdf', showFile: false },
    { filePath: '/assets/Finales/Final_2020_Agosto.pdf', showFile: false },
    { filePath: '/assets/Finales/Final_2020_Julio.pdf', showFile: false },
  ];
  constructor() {}

  public ngOnInit(): void {}

  public onVerFinalButtonClick(final): void {
    final.showFile = true;
  }
}
