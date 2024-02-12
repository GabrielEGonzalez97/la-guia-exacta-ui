import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingenieria-de-sistemas-descripcion',
  templateUrl: './ingenieria-de-sistemas-descripcion.component.html',
  styleUrls: ['./ingenieria-de-sistemas-descripcion.component.scss'],
})
export class IngenieriaDeSistemasDescripcionComponent implements OnInit {
  public isDescripcionPlanEstudiosTileVisible: boolean = false;
  public isPerfilProfesionalTileVisible: boolean = false;
  public isAlcancesDelTituloTileVisible: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public onDescripcionPlanEstudiosTileClick(): void {
    this.isDescripcionPlanEstudiosTileVisible =
      !this.isDescripcionPlanEstudiosTileVisible;
  }

  public onPerfilProfesionalTileClick(): void {
    this.isPerfilProfesionalTileVisible = !this.isPerfilProfesionalTileVisible;
  }

  public onAlcancesDelTituloTileClick(): void {
    this.isAlcancesDelTituloTileVisible = !this.isAlcancesDelTituloTileVisible;
  }
}
