import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { CatedraModalWindowComponent } from 'src/app/catedras/catedra-modal-window/catedra-modal-window.component';
import {
  CORRELATIVE_CURSADA_NAME,
  CORRELATIVE_FINAL_NAME,
  FIFTH_YEAR_NAME,
  FIRST_QUARTER_NAME,
  FIRST_YEAR_NAME,
  FOURTH_YEAR_NAME,
  ICorrelativeSubject,
  ISubject,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  THIRD_YEAR_NAME,
  TUDAI_NAME,
} from 'src/app/catedras/interfaces';
import { tudai_subjects } from 'src/app/catedras/tudai_subjects';
import {
  CORRELATIVE_COLOR_SUBJECT,
  DEFAULT_COLOR_SUBJECT,
  REQUISITO_CURSADA_COLOR_SUBJECT,
  REQUISITO_FINAL_COLOR_SUBJECT,
  SELECTED_COLOR_SUBJECT,
} from 'src/app/common/constants';
import { ISubjectWithSelection } from 'src/app/common/interfaces';
import {
  arquitecturas_web_with_selection,
  bases_de_datos_tudai_with_selection,
  configuracion_y_desarrollo_de_aplicaciones_en_redes_with_selection,
  ingles_1_with_selection,
  ingles_2_with_selection,
  interfaces_de_usuario_e_interaccion_with_selection,
  introduccion_a_las_metodologias_de_desarrollo_de_software_with_selection,
  programacion_1_with_selection,
  programacion_2_with_selection,
  programacion_3_with_selection,
  taller_de_matematica_computacional_with_selection,
  tecnicas_de_documentacion_y_validacion_with_selection,
  tecnologia_de_la_informacion_en_las_organizaciones_with_selection,
  web_1_with_selection,
  web_2_with_selection,
} from './constants';

@Component({
  selector: 'app-tudai-plan-de-estudios',
  templateUrl: './tudai-plan-de-estudios.component.html',
  styleUrls: ['./tudai-plan-de-estudios.component.scss'],
})
export class TudaiPlanDeEstudiosComponent implements OnInit {
  public isPlanEstudiosTileVisible: boolean = false;

  public ingles_1: ISubjectWithSelection = ingles_1_with_selection;
  public programacion_1: ISubjectWithSelection = programacion_1_with_selection;
  public taller_de_matematica_computacional: ISubjectWithSelection =
    taller_de_matematica_computacional_with_selection;
  public web_1: ISubjectWithSelection = web_1_with_selection;
  public ingles_2: ISubjectWithSelection = ingles_2_with_selection;
  public programacion_2: ISubjectWithSelection = programacion_2_with_selection;
  public tecnologia_de_la_informacion_en_las_organizaciones: ISubjectWithSelection =
    tecnologia_de_la_informacion_en_las_organizaciones_with_selection;
  public web_2: ISubjectWithSelection = web_2_with_selection;
  public bases_de_datos_tudai: ISubjectWithSelection =
    bases_de_datos_tudai_with_selection;
  public configuracion_y_desarrollo_de_aplicaciones_en_redes: ISubjectWithSelection =
    configuracion_y_desarrollo_de_aplicaciones_en_redes_with_selection;
  public introduccion_a_las_metodologias_de_desarrollo_de_software: ISubjectWithSelection =
    introduccion_a_las_metodologias_de_desarrollo_de_software_with_selection;
  public programacion_3: ISubjectWithSelection = programacion_3_with_selection;
  public arquitecturas_web: ISubjectWithSelection =
    arquitecturas_web_with_selection;
  public interfaces_de_usuario_e_interaccion: ISubjectWithSelection =
    interfaces_de_usuario_e_interaccion_with_selection;
  public tecnicas_de_documentacion_y_validacion: ISubjectWithSelection =
    tecnicas_de_documentacion_y_validacion_with_selection;

  public seminario_tecnologico_1: ISubjectWithSelection = {
    subject: {
      id: '',
      name: 'Seminario Tecnológico 1',
      status: '',
      career: TUDAI_NAME,
      year: null,
      quarter: null,
      modalidadLink: '',
      programaLink: '',
      webLink: '',
      moodleLink: '',
      clasesLink: '',
      resumenesLink: '',
      parcialesLink: '',
      finalesLink: '',
      correlatives: [],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public seminario_tecnologico_2: ISubjectWithSelection = {
    subject: {
      id: '',
      name: 'Seminario Tecnológico 2',
      status: '',
      career: TUDAI_NAME,
      year: null,
      quarter: null,
      modalidadLink: '',
      programaLink: '',
      webLink: '',
      moodleLink: '',
      clasesLink: '',
      resumenesLink: '',
      parcialesLink: '',
      finalesLink: '',
      correlatives: [],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public seminario_tecnologico_3: ISubjectWithSelection = {
    subject: {
      id: '',
      name: 'Seminario Tecnológico 3',
      status: '',
      career: TUDAI_NAME,
      year: null,
      quarter: null,
      modalidadLink: '',
      programaLink: '',
      webLink: '',
      moodleLink: '',
      clasesLink: '',
      resumenesLink: '',
      parcialesLink: '',
      finalesLink: '',
      correlatives: [],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public pps: ISubjectWithSelection = {
    subject: {
      id: '',
      name: 'Prácticas Profesionales (PPS)',
      status: '',
      career: TUDAI_NAME,
      year: null,
      quarter: null,
      modalidadLink: '',
      programaLink: '',
      webLink: '',
      moodleLink: '',
      clasesLink: '',
      resumenesLink: '',
      parcialesLink: '',
      finalesLink: '',
      correlatives: [
        {
          typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
          subject:
            this.introduccion_a_las_metodologias_de_desarrollo_de_software
              .subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public allSubjects: ISubjectWithSelection[] = [
    this.ingles_1,
    this.programacion_1,
    this.taller_de_matematica_computacional,
    this.web_1,
    this.ingles_2,
    this.programacion_2,
    this.tecnologia_de_la_informacion_en_las_organizaciones,
    this.seminario_tecnologico_1,
    this.web_2,
    this.bases_de_datos_tudai,
    this.configuracion_y_desarrollo_de_aplicaciones_en_redes,
    this.introduccion_a_las_metodologias_de_desarrollo_de_software,
    this.programacion_3,
    this.seminario_tecnologico_2,
    this.arquitecturas_web,
    this.interfaces_de_usuario_e_interaccion,
    this.tecnicas_de_documentacion_y_validacion,
    this.seminario_tecnologico_3,
    this.pps,
  ];

  constructor(private modalService: ModalService) {}

  public ngOnInit(): void {}

  public onMouseOverSubject(subjectToEvaluate: ISubjectWithSelection): void {
    subjectToEvaluate.color = SELECTED_COLOR_SUBJECT;
    this.paintCorrelativesSubjects(subjectToEvaluate, subjectToEvaluate);
    this.paintSubjectsThatObstruct(subjectToEvaluate);
  }

  public onMouseLeaveSubject(): void {
    this.allSubjects.forEach((subject: ISubjectWithSelection) => {
      subject.color = DEFAULT_COLOR_SUBJECT;
    });
  }

  public showCatedraModalWindow(subject: ISubjectWithSelection): void {
    this.modalService.create({
      component: CatedraModalWindowComponent,
      inputs: {
        subject: subject.subject,
        allSubjects: tudai_subjects,
      },
    });
  }

  public onPlanEstudiosTileClick(): void {
    this.isPlanEstudiosTileVisible = !this.isPlanEstudiosTileVisible;
  }

  private paintCorrelativesSubjects(
    subjectToEvaluateOriginal: ISubjectWithSelection,
    nextSubjectToEvaluate: ISubjectWithSelection
  ): void {
    nextSubjectToEvaluate.subject.correlatives.forEach(
      (correlativeSubject: ICorrelativeSubject) => {
        this.allSubjects.forEach((subject: ISubjectWithSelection) => {
          if (correlativeSubject.subject.id == subject.subject.id) {
            if (
              correlativeSubject.typeOfCorrelativity ===
                CORRELATIVE_FINAL_NAME ||
              this.isRequisitoN5(
                subjectToEvaluateOriginal.subject,
                subject.subject
              )
            ) {
              subject.color = REQUISITO_FINAL_COLOR_SUBJECT;
            } else {
              if (subject.color !== REQUISITO_FINAL_COLOR_SUBJECT) {
                subject.color = REQUISITO_CURSADA_COLOR_SUBJECT;
              }
            }
            this.paintCorrelativesSubjects(subjectToEvaluateOriginal, subject);
          }
        });
      }
    );
  }

  private isRequisitoN5(
    subject: ISubject,
    subjectToEvaluate: ISubject
  ): boolean {
    if (
      subject.year === THIRD_YEAR_NAME &&
      subject.quarter === SECOND_QUARTER_NAME
    ) {
      if (
        subjectToEvaluate.year === FIRST_YEAR_NAME &&
        subjectToEvaluate.quarter === FIRST_QUARTER_NAME
      ) {
        return true;
      }
    } else if (
      subject.year === FOURTH_YEAR_NAME &&
      subject.quarter === FIRST_QUARTER_NAME
    ) {
      if (
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME) ||
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === SECOND_QUARTER_NAME)
      ) {
        return true;
      }
    } else if (
      subject.year === FOURTH_YEAR_NAME &&
      subject.quarter === SECOND_QUARTER_NAME
    ) {
      if (
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME) ||
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === SECOND_QUARTER_NAME) ||
        (subjectToEvaluate.year === SECOND_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME)
      ) {
        return true;
      }
    } else if (
      subject.year === FIFTH_YEAR_NAME &&
      subject.quarter === FIRST_QUARTER_NAME
    ) {
      if (
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME) ||
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === SECOND_QUARTER_NAME) ||
        (subjectToEvaluate.year === SECOND_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME) ||
        (subjectToEvaluate.year === SECOND_YEAR_NAME &&
          subjectToEvaluate.quarter === SECOND_QUARTER_NAME)
      ) {
        return true;
      }
    }
    return false;
  }

  private paintSubjectsThatObstruct(
    subjectToEvaluate: ISubjectWithSelection
  ): void {
    this.allSubjects.forEach((subject: ISubjectWithSelection) => {
      subject.subject.correlatives.forEach(
        (correlativeSubject: ICorrelativeSubject) => {
          if (correlativeSubject.subject.id == subjectToEvaluate.subject.id) {
            subject.color = CORRELATIVE_COLOR_SUBJECT;
            this.paintSubjectsThatObstruct(subject);
          }
        }
      );
    });
  }
}
