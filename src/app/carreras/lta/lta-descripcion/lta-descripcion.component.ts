import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lta-descripcion',
  templateUrl: './lta-descripcion.component.html',
  styleUrls: ['./lta-descripcion.component.scss'],
})
export class LtaDescripcionComponent implements OnInit {
  public isPerfilProfesionalTileVisible: boolean = false;
  public isAlcancesDelTituloTileVisible: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public onPerfilProfesionalTileClick(): void {
    this.isPerfilProfesionalTileVisible = !this.isPerfilProfesionalTileVisible;
  }

  public onAlcancesDelTituloTileClick(): void {
    this.isAlcancesDelTituloTileVisible = !this.isAlcancesDelTituloTileVisible;
  }
}
