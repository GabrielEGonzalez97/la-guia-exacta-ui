import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'carbon-components-angular';
import { MONTHS } from '../common/constants';
import { IGoogleDriveFolderInformation } from '../common/interfaces';
import { HttpService } from '../services/http.service';
import { IWithState } from '../services/utils.service';
import { IFinalesInformation } from './interfaces';

@Component({
  selector: 'app-finales',
  templateUrl: './finales.component.html',
  styleUrls: ['./finales.component.scss'],
})
export class FinalesComponent implements OnInit {
  public finales: IFinalesInformation[] = [];
  public finalesToShow: IFinalesInformation[] = [];
  public areFinalesLoading: boolean = true;
  public yearDropdownItems: ListItem[] = [
    {
      content: 'Todos',
      selected: true,
    },
  ];
  public monthDropdownItems: ListItem[] = [
    {
      content: 'Todos',
      selected: true,
    },
  ];

  private subjectFolderName: string = '';
  private selectedYearContent: string = '';
  private selectedMonthContent: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  public ngOnInit(): void {
    this.subjectFolderName =
      this.activatedRoute.snapshot.paramMap.get('subjectName');

    this.completeDropdownWithYears();
    this.completeDropdownWithMonths();

    this.httpService
      .getFilesFromFolderWithinASubject(this.subjectFolderName, 'Finales')
      .subscribe(
        (
          filesFinalesFolderWithState: IWithState<
            IGoogleDriveFolderInformation[]
          >
        ) => {
          if (filesFinalesFolderWithState.state === 'done') {
            filesFinalesFolderWithState.value.forEach(
              (final: IGoogleDriveFolderInformation) => {
                this.finales.push({
                  id: final.id,
                  name: final.name.split('.pdf')[0],
                  year: this.extractYearFromFinalName(final.name),
                  month: final.name.split(' ')[2].split('.pdf')[0],
                  showFile: false,
                  fileUrl: '',
                });
              }
            );
            this.sortFinalesByMonthAndYear();
            this.finalesToShow = this.finales;
            this.areFinalesLoading = false;
          } else if (filesFinalesFolderWithState.state === 'error') {
            this.areFinalesLoading = false;
          }
        }
      );
  }

  public onVerFinalButtonClick(final: IFinalesInformation): void {
    if (final.fileUrl === '') {
      this.httpService
        .getFileById(final.id)
        .subscribe((fileWithState: IWithState<ArrayBuffer>) => {
          if (fileWithState.state === 'done') {
            let file = new Blob([fileWithState.value], {
              type: 'application/pdf',
            });
            final.fileUrl = URL.createObjectURL(file);
          }
        });
    }

    final.showFile = !final.showFile;
  }

  public onSelectedYearChange(selectedYear: any): void {
    this.selectedYearContent =
      selectedYear.item.content !== 'Todos' ? selectedYear.item.content : '';
    this.onFilterChange();
  }

  public onSelectedMonthChange(selectedMonth: any): void {
    this.selectedMonthContent =
      selectedMonth.item.content !== 'Todos' ? selectedMonth.item.content : '';
    this.onFilterChange();
  }

  private onFilterChange(): void {
    const filterFunction = (field: string, fieldToSearch: string) =>
      field.toLowerCase().indexOf(fieldToSearch.toLowerCase()) !== -1;
    this.finalesToShow = this.finales.filter(
      (final: IFinalesInformation) =>
        filterFunction(final.year, this.selectedYearContent) &&
        filterFunction(final.month, this.selectedMonthContent)
    );
  }

  private completeDropdownWithYears(): void {
    const currentYear: number = new Date().getFullYear();
    for (let index: number = currentYear; index >= 2010; index--) {
      this.yearDropdownItems.push({
        content: index.toString(),
        selected: false,
      });
    }
  }

  private completeDropdownWithMonths(): void {
    MONTHS.forEach((month: string) => {
      this.monthDropdownItems.push({
        content: month,
        selected: false,
      });
    });
  }

  private extractYearFromFinalName(finalName: string): string {
    return /(^|\s)(\d{4})(\s|$)/.exec(finalName)[2];
  }

  private sortFinalesByMonthAndYear(): void {
    this.finales.sort((a: IFinalesInformation, b: IFinalesInformation) => {
      return MONTHS.indexOf(b.month) - MONTHS.indexOf(a.month);
    });

    this.finales.sort((a: IFinalesInformation, b: IFinalesInformation) => {
      return Number(b.year) - Number(a.year);
    });
  }
}
