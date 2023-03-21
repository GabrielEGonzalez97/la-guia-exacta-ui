import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tudai-descripcion',
  templateUrl: './tudai-descripcion.component.html',
  styleUrls: ['./tudai-descripcion.component.scss'],
})
export class TudaiDescripcionComponent implements OnInit {
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
