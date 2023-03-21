import { Component, OnInit } from '@angular/core';
import { ListItem } from 'carbon-components-angular';
import {
  CAREERS_DROPDOWN_ITEMS,
  QUARTERS_DROPDOWN_ITEMS,
  ingenieria_de_sistemas_subjects_plan_2011,
} from './constants';
import { ISubject } from './interfaces';
import { tudai_subjects } from './tudai_subjects';

@Component({
  selector: 'app-catedras',
  templateUrl: './catedras.component.html',
  styleUrls: ['./catedras.component.scss'],
})
export class CatedrasComponent implements OnInit {
  public careers_dropdown_items: ListItem[] = CAREERS_DROPDOWN_ITEMS;
  public quarters_dropdown_items: ListItem[] = QUARTERS_DROPDOWN_ITEMS;
  public allSubjects: ISubject[] = [
    ...ingenieria_de_sistemas_subjects_plan_2011,
    ...tudai_subjects,
  ];
  public subjectsToDisplay: ISubject[] = this.allSubjects;

  private selectedCareerContent: string = '';
  private selectedQuarterContent: string = '';
  private searchingByTeacherContent: string = '';
  private searchingBySubjectContent: string = '';

  constructor() {}

  public ngOnInit(): void {
    this.subjectsToDisplay.sort((a: ISubject, b: ISubject) => {
      return a.name.localeCompare(b.name);
    });
  }

  private onFilterChange(): void {
    const filterFunction = (field: string, fieldToSearch: string) =>
      field.toLowerCase().indexOf(fieldToSearch.toLowerCase()) !== -1;
    this.subjectsToDisplay = this.allSubjects.filter(
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
