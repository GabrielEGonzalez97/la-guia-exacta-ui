import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent implements OnInit {
  @ViewChild('myTable') myTable: ElementRef;

  @Input() public matrixLetter: string = '';

  @Output() onDeleteMatrixEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  public numberOfRows: number = 3;
  public numberOfColumns: number = 3;

  public matrix: { value: string }[][] = [
    [{ value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }],
  ];

  constructor() {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.calculateTableMaxHeight();
  }

  public calculateTableMaxHeight(): void {
    // Get the table and its rows
    const table = this.myTable.nativeElement;
    const rows = table.getElementsByTagName('tr');

    // Calculate the total height of the rows
    let totalHeight = 0;
    for (let i = 0; i < rows.length; i++) {
      totalHeight += rows[i].getBoundingClientRect().height;
    }

    // Set the maximum height of the table
    table.style.minHeight = totalHeight + 'px';
    table.style.maxHeight = totalHeight + 'px';
  }

  public changeMatrixDimensions(rows: number, columns: number): void {
    if (rows > this.matrix.length) {
      const rowsToAdd: number = rows - this.matrix.length;
      for (let i = 0; i < rowsToAdd; i++) {
        const newRow: { value: string }[] = new Array(
          this.matrix[0].length
        ).fill(0);
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
  }

  public deleteMatrix(): void {
    this.onDeleteMatrixEmitter.emit(this.matrixLetter);
  }
}
