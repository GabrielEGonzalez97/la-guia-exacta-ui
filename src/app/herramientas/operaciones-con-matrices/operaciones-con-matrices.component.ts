import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones-con-matrices',
  templateUrl: './operaciones-con-matrices.component.html',
  styleUrls: ['./operaciones-con-matrices.component.scss'],
})
export class OperacionesConMatricesComponent implements OnInit {
  public matrices: string[] = [];

  public readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  private deletedMatrices: string[] = [];

  mathExpression = '<p>La expresión matemática es: $\\sqrt{a^2 + b^2}$</p>';

  constructor() {}

  public ngOnInit(): void {
    this.addNewMatrix();
  }

  public addNewMatrix(): void {
    let newMatrix: string = '';

    if (this.deletedMatrices.length > 0) {
      newMatrix = this.deletedMatrices.shift();
    } else {
      newMatrix = this.alphabet[this.matrices.length];
    }

    this.matrices.push(newMatrix);
  }

  public deleteMatrix(matrixLetter: string): void {
    const index: number = this.matrices.indexOf(matrixLetter);

    if (index !== -1) {
      const deletedMatrix: string = this.matrices.splice(index, 1)[0];
      this.deletedMatrices.push(deletedMatrix);
      this.deletedMatrices.sort();
    } else {
      console.log(`La matriz ${matrixLetter} no existe.`);
    }
  }
}
