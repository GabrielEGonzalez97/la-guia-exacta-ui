import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IMatrixElement, IMatrixWithName } from './interfaces';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent implements OnInit {
  @ViewChild('tableContainerElement') tableElementReference: ElementRef;

  @Input() public matrixLetter: string = '';
  @Input() public matrix: IMatrixElement[][] = [];

  @Output() onUpdateMatrixEmitter: EventEmitter<IMatrixWithName> =
    new EventEmitter<IMatrixWithName>();

  @Output() onDeleteMatrixEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  public numberOfRows: number = 3;
  public numberOfColumns: number = 3;

  constructor() {}

  public ngOnInit(): void {
    this.emitUpdateMatrixEvent();
  }

  private emitUpdateMatrixEvent() {
    this.onUpdateMatrixEmitter.emit({
      name: this.matrixLetter,
      matrix: this.matrix,
    });
  }

  public changeMatrixDimensions(rows: number, columns: number): void {
    if (rows > this.matrix.length) {
      const rowsToAdd: number = rows - this.matrix.length;
      for (let i = 0; i < rowsToAdd; i++) {
        const newRow: IMatrixElement[] = new Array(this.matrix[0].length).fill({
          value: '',
        });
        this.matrix.push(newRow);
      }
    } else if (rows < this.matrix.length) {
      const rowsToRemove: number = this.matrix.length - rows;
      this.matrix.splice(-rowsToRemove, rowsToRemove);
    }

    if (columns > this.matrix[0].length) {
      const columnsToAdd: number = columns - this.matrix[0].length;
      for (let i = 0; i < columnsToAdd; i++) {
        this.matrix.forEach((row) => row.push({ value: '' }));
      }
    } else if (columns < this.matrix[0].length) {
      const columnsToRemove: number = this.matrix[0].length - columns;
      this.matrix.forEach((row) =>
        row.splice(-columnsToRemove, columnsToRemove)
      );
    }

    this.emitUpdateMatrixEvent();
  }

  public deleteMatrix(): void {
    this.onDeleteMatrixEmitter.emit(this.matrixLetter);
  }

  public onCellValueChange(
    rowIndex: number,
    colIndex: number,
    newValue: any
  ): void {
    this.matrix[rowIndex][colIndex].value = newValue.target.value;
    this.emitUpdateMatrixEvent();
  }
}
