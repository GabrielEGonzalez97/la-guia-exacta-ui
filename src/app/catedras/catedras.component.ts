import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import {
  CAREERS_DROPDOWN_ITEMS,
  QUARTERS_DROPDOWN_ITEMS,
  SUBJECTS,
} from './constants';
import { ICorrelativeSubject, ISubject } from './interfaces';

@Component({
  selector: 'app-catedras',
  templateUrl: './catedras.component.html',
  styleUrls: ['./catedras.component.scss'],
})
export class CatedrasComponent implements OnInit {
  public careers_dropdown_items: ListItem[] = CAREERS_DROPDOWN_ITEMS;
  public quarters_dropdown_items: ListItem[] = QUARTERS_DROPDOWN_ITEMS;
  public subjects: ISubject[] = SUBJECTS;

  public selectedCareerContent: string = '';
  public selectedQuarterContent: string = '';
  public searchingByTeacherContent: string = '';
  public searchingBySubjectContent: string = '';

  constructor() {}

  public ngOnInit(): void {}

  private onFilterChange(): void {
    const filterFunction = (field: string, fieldToSearch: string) =>
      field.toLowerCase().indexOf(fieldToSearch.toLowerCase()) !== -1;
    this.subjects = SUBJECTS.filter(
      (subject: ISubject) =>
        filterFunction(subject.career, this.selectedCareerContent) &&
        filterFunction(subject.quarter, this.selectedQuarterContent) &&
        filterFunction(subject.name, this.searchingBySubjectContent) &&
        filterFunction(subject.teacher, this.searchingByTeacherContent)
    );
  }

  public onSelectedCareerChange(selectedCareer: any): void {
    this.selectedCareerContent =
      selectedCareer.item.content !== 'Todas'
        ? selectedCareer.item.content
        : '';
    this.onFilterChange();
  }

  public onSelectedQuarterChange(selectedQuarter: any): void {
    this.selectedQuarterContent =
      selectedQuarter.item.content !== 'Todos'
        ? selectedQuarter.item.content
        : '';
    this.onFilterChange();
  }

  public onChangeSearchingByTeacher(teacherNameToSearch: string): void {
    this.searchingByTeacherContent = teacherNameToSearch;
    this.onFilterChange();
  }

  public onChangeSearchingBySubject(subjectNameToSearch: string): void {
    this.searchingBySubjectContent = subjectNameToSearch;
    this.onFilterChange();
  }
}
