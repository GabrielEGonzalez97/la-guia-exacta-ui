import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'carbon-components-angular';
import { HttpService } from '../services/http.service';
import { IWithState } from '../services/utils.service';
import { IVideosInformation } from './interfaces';

@Component({
  selector: 'app-videos-clases',
  templateUrl: './videos-clases.component.html',
  styleUrls: ['./videos-clases.component.scss'],
})
export class VideosClasesComponent implements OnInit {
  public videos: IVideosInformation[] = [];
  public videosToShow: IVideosInformation[] = [];
  public areVideosLoading: boolean = true;
  public yearDropdownItems: ListItem[] = [
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
                fileWithState.value.forEach((video) => {
                  this.videos.push({
                    videoName: video.videoName,
                    year: video.year,
                    videoUrl: video.videoUrl,
                    showFile: false,
                  });
                });
                this.areVideosLoading = false;
              }
            });
          this.videosToShow = this.videos;
        }
      });
  }

  public onVerVideoButtonClick(video: any): void {
    video.showFile = !video.showFile;
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
    this.videosToShow = this.videos.filter(
      (video: any) =>
        filterFunction(video.year, this.selectedYearContent) &&
        filterFunction(video.month, this.selectedMonthContent)
    );
  }
}
