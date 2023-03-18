import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'carbon-components-angular';
import { MONTHS } from '../common/constants';
import { HttpService } from '../services/http.service';
import { IWithState } from '../services/utils.service';

@Component({
  selector: 'app-videos-clases',
  templateUrl: './videos-clases.component.html',
  styleUrls: ['./videos-clases.component.scss'],
})
export class VideosClasesComponent implements OnInit {
  public finales: any[] = [];
  public finalesToShow: any[] = [];
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

    this.httpService
      .getFilesFromFolderWithinASubject(this.subjectFolderName, 'Videos')
      .subscribe((videoFolderWithState: IWithState<any[]>) => {
        if (videoFolderWithState.state === 'done') {
          this.httpService
            .getJSONFileById(videoFolderWithState.value[0].id)
            .subscribe((fileWithState: IWithState<any>) => {
              if (fileWithState.state === 'done') {
                console.log(fileWithState);
                fileWithState.value.forEach((video) => {
                  this.finales.push({
                    videoName: video.videoName,
                    videoUrl: video.videoUrl,
                    showFile: false,
                  });
                });
              }
            });
          this.finalesToShow = this.finales;
        }
      });
  }

  public onVerFinalButtonClick(final: any): void {
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
      (final: any) =>
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
    this.finales.sort((a: any, b: any) => {
      return MONTHS.indexOf(b.month) - MONTHS.indexOf(a.month);
    });

    this.finales.sort((a: any, b: any) => {
      return Number(b.year) - Number(a.year);
    });
  }
}
