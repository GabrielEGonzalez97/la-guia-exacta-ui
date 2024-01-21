import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ListItem } from 'carbon-components-angular';
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

  public completeMatrixWithItems: ListItem[] = [
    {
      content: 'Matriz identidad',
      selected: false,
    },
    {
      content: 'Un número',
      selected: false,
    },
  ];

  public isCompleteMatrixWithInputVisible: boolean = false;

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

  public onSelectedValueToCompleteMatrix(
    selectedValueToCompleteMatrix: any
  ): void {
    if (selectedValueToCompleteMatrix.item.content === 'Matriz identidad') {
      this.isCompleteMatrixWithInputVisible = false;
      for (let rowIndex: number = 0; rowIndex < this.numberOfRows; rowIndex++) {
        for (
          let colIndex: number = 0;
          colIndex < this.numberOfColumns;
          colIndex++
        ) {
          if (rowIndex === colIndex) {
            this.matrix[rowIndex][colIndex].value = '1';
          } else {
            this.matrix[rowIndex][colIndex].value = '0';
          }
        }
      }
      this.emitUpdateMatrixEvent();
    } else if (selectedValueToCompleteMatrix.item.content === 'Un número') {
      this.isCompleteMatrixWithInputVisible = true;
    }
  }

  public onCompleteMatrixWithValueChange(newValue: any): void {
    for (let rowIndex: number = 0; rowIndex < this.numberOfRows; rowIndex++) {
      for (
        let colIndex: number = 0;
        colIndex < this.numberOfColumns;
        colIndex++
      ) {
        this.matrix[rowIndex][colIndex].value = newValue.target.value;
      }
    }
    this.emitUpdateMatrixEvent();
  }

  public changeMatrixDimensions(rows: number, columns: number): void {
    if (rows >= 1 && rows <= 5 && columns >= 1 && columns <= 5) {
      if (rows > this.matrix.length) {
        const rowsToAdd: number = rows - this.matrix.length;
        for (let i = 0; i < rowsToAdd; i++) {
          const newRow: IMatrixElement[] = new Array(this.matrix[0].length)
            .fill({
              value: '',
            })
            .map((cell) => ({ ...cell }));
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

  public validateInput(event: KeyboardEvent): void {
    const allowedCharacters: RegExp = /[0-9\/-]/;
    const inputChar: string = String.fromCharCode(event.charCode);

    if (!allowedCharacters.test(inputChar)) {
      event.preventDefault();
    }
  }
}
