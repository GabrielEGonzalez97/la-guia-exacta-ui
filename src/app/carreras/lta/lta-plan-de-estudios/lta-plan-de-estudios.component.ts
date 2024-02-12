import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { CatedraModalWindowComponent } from 'src/app/catedras/catedra-modal-window/catedra-modal-window.component';
import {
  CORRELATIVE_FINAL_NAME,
  FIFTH_YEAR_NAME,
  FIRST_QUARTER_NAME,
  FIRST_YEAR_NAME,
  FOURTH_YEAR_NAME,
  ICorrelativeSubject,
  ISubject,
  LTA_NAME,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  THIRD_YEAR_NAME,
} from 'src/app/catedras/interfaces';
import { lta_subjects } from 'src/app/catedras/lta_subjects';
import {
  CORRELATIVE_COLOR_SUBJECT,
  DEFAULT_COLOR_SUBJECT,
  REQUISITO_CURSADA_COLOR_SUBJECT,
  REQUISITO_FINAL_COLOR_SUBJECT,
  SELECTED_COLOR_SUBJECT,
} from 'src/app/common/constants';
import { ISubjectWithSelection } from 'src/app/common/interfaces';
import {
  analisis_matematico_1_LTA_with_selection,
  analisis_matematico_2_LTA_with_selection,
  biologia_LTA_with_selection,
  calculo_numerico_LTA_with_selection,
  ciencias_de_la_tierra_1_with_selection,
  ciencias_de_la_tierra_2_with_selection,
  contaminacion_atmosferica_with_selection,
  contaminacion_en_agua_with_selection,
  economia_ambiental_LTA_with_selection,
  evaluacion_de_impacto_ambiental_with_selection,
  fisica_general_1_LTA_with_selection,
  fisica_general_2_LTA_with_selection,
  fluodinamica_ambiental_with_selection,
  formulacion_y_evaluacion_de_proyectos_LTA_with_selection,
  fundamentos_de_ecologia_with_selection,
  geometria_y_algebra_lineal_LTA_with_selection,
  introduccion_a_la_informatica_with_selection,
  legislacion_ambiental_LTA_with_selection,
  mecanica_de_fluidos_with_selection,
  probabilidades_y_estadistica_LTA_with_selection,
  quimica_ambiental_LTA_with_selection,
  quimica_general_e_inorganica_with_selection,
  quimica_organica_y_biologica_LTA_with_selection,
  radiacion_with_selection,
  residuos_solidos_with_selection,
  tecnologia_ambiente_y_sociedad_with_selection,
  tratamiento_de_efluentes_gaseosos_with_selection,
  tratamiento_de_efluentes_liquidos_with_selection,
  tratamiento_de_residuos_solidos_with_selection,
} from './constants';

@Component({
  selector: 'app-lta-plan-de-estudios',
  templateUrl: './lta-plan-de-estudios.component.html',
  styleUrls: ['./lta-plan-de-estudios.component.scss'],
})
export class LtaPlanDeEstudiosComponent implements OnInit {
  public isPlanEstudiosTileVisible: boolean = false;

  public analisis_matematico_1_LTA: ISubjectWithSelection =
    analisis_matematico_1_LTA_with_selection;
  public tecnologia_ambiente_y_sociedad: ISubjectWithSelection =
    tecnologia_ambiente_y_sociedad_with_selection;
  public quimica_general_e_inorganica: ISubjectWithSelection =
    quimica_general_e_inorganica_with_selection;
  public introduccion_a_la_informatica: ISubjectWithSelection =
    introduccion_a_la_informatica_with_selection;
  public fisica_general_1_LTA: ISubjectWithSelection =
    fisica_general_1_LTA_with_selection;
  public geometria_y_algebra_lineal_LTA: ISubjectWithSelection =
    geometria_y_algebra_lineal_LTA_with_selection;
  public quimica_organica_y_biologica_LTA: ISubjectWithSelection =
    quimica_organica_y_biologica_LTA_with_selection;
  public fisica_general_2_LTA: ISubjectWithSelection =
    fisica_general_2_LTA_with_selection;
  public analisis_matematico_2_LTA: ISubjectWithSelection =
    analisis_matematico_2_LTA_with_selection;
  public biologia_LTA: ISubjectWithSelection = biologia_LTA_with_selection;
  public fundamentos_de_ecologia: ISubjectWithSelection =
    fundamentos_de_ecologia_with_selection;
  public quimica_ambiental_LTA: ISubjectWithSelection =
    quimica_ambiental_LTA_with_selection;
  public calculo_numerico_LTA: ISubjectWithSelection =
    calculo_numerico_LTA_with_selection;
  public ciencias_de_la_tierra_1: ISubjectWithSelection =
    ciencias_de_la_tierra_1_with_selection;
  public mecanica_de_fluidos: ISubjectWithSelection =
    mecanica_de_fluidos_with_selection;
  public legislacion_ambiental_LTA: ISubjectWithSelection =
    legislacion_ambiental_LTA_with_selection;
  public economia_ambiental_LTA: ISubjectWithSelection =
    economia_ambiental_LTA_with_selection;
  public probabilidades_y_estadistica_LTA: ISubjectWithSelection =
    probabilidades_y_estadistica_LTA_with_selection;
  public residuos_solidos: ISubjectWithSelection =
    residuos_solidos_with_selection;
  public contaminacion_atmosferica: ISubjectWithSelection =
    contaminacion_atmosferica_with_selection;
  public contaminacion_en_agua: ISubjectWithSelection =
    contaminacion_en_agua_with_selection;
  public formulacion_y_evaluacion_de_proyectos_LTA: ISubjectWithSelection =
    formulacion_y_evaluacion_de_proyectos_LTA_with_selection;
  public ciencias_de_la_tierra_2: ISubjectWithSelection =
    ciencias_de_la_tierra_2_with_selection;
  public fluodinamica_ambiental: ISubjectWithSelection =
    fluodinamica_ambiental_with_selection;
  public radiacion: ISubjectWithSelection = radiacion_with_selection;
  public tratamiento_de_efluentes_gaseosos: ISubjectWithSelection =
    tratamiento_de_efluentes_gaseosos_with_selection;
  public tratamiento_de_efluentes_liquidos: ISubjectWithSelection =
    tratamiento_de_efluentes_liquidos_with_selection;
  public tratamiento_de_residuos_solidos: ISubjectWithSelection =
    tratamiento_de_residuos_solidos_with_selection;
  public evaluacion_de_impacto_ambiental: ISubjectWithSelection =
    evaluacion_de_impacto_ambiental_with_selection;

  public optativa_1: ISubjectWithSelection = {
    subject: {
      id: 'optativa_1',
      name: 'Optativa I',
      status: '',
      career: LTA_NAME,
      year: SECOND_YEAR_NAME,
      quarter: FIRST_QUARTER_NAME,
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

  public optativa_2: ISubjectWithSelection = {
    subject: {
      id: 'optativa_2',
      name: 'Optativa II',
      status: '',
      career: LTA_NAME,
      year: SECOND_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
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

  public optativa_3: ISubjectWithSelection = {
    subject: {
      id: 'optativa_3',
      name: 'Optativa III',
      status: '',
      career: LTA_NAME,
      year: THIRD_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
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
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.analisis_matematico_1_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.tecnologia_ambiente_y_sociedad.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.introduccion_a_la_informatica.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fisica_general_1_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.geometria_y_algebra_lineal_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.quimica_organica_y_biologica_LTA.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public optativa_4: ISubjectWithSelection = {
    subject: {
      id: 'optativa_4',
      name: 'Optativa IV',
      status: '',
      career: LTA_NAME,
      year: FIFTH_YEAR_NAME,
      quarter: FIRST_QUARTER_NAME,
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
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.biologia_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.quimica_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.calculo_numerico_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ciencias_de_la_tierra_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.mecanica_de_fluidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.legislacion_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.economia_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_2.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public optativa_5: ISubjectWithSelection = {
    subject: {
      id: 'optativa_5',
      name: 'Optativa V',
      status: '',
      career: LTA_NAME,
      year: FIFTH_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
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
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fisica_general_2_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.analisis_matematico_2_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.biologia_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.quimica_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.calculo_numerico_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_2.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ciencias_de_la_tierra_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.mecanica_de_fluidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.legislacion_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.economia_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.probabilidades_y_estadistica_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.residuos_solidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_3.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public pps: ISubjectWithSelection = {
    subject: {
      id: 'pps',
      name: 'Práctica Profesional Supervisada',
      status: '',
      career: LTA_NAME,
      year: FIFTH_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
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
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fisica_general_2_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.analisis_matematico_2_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.biologia_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.quimica_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.calculo_numerico_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_2.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ciencias_de_la_tierra_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.mecanica_de_fluidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.legislacion_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.economia_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.probabilidades_y_estadistica_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.residuos_solidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_3.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public proyecto_final: ISubjectWithSelection = {
    subject: {
      id: 'proyecto_final',
      name: 'Proyecto Final',
      status: '',
      career: LTA_NAME,
      year: FIFTH_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
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
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.quimica_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fundamentos_de_ecologia.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.calculo_numerico_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ciencias_de_la_tierra_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.mecanica_de_fluidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.legislacion_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.economia_ambiental_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.probabilidades_y_estadistica_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.residuos_solidos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.contaminacion_atmosferica.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.contaminacion_en_agua.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.formulacion_y_evaluacion_de_proyectos_LTA.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ciencias_de_la_tierra_2.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.fluodinamica_ambiental.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.radiacion.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.optativa_3.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public allSubjects: ISubjectWithSelection[] = [
    this.analisis_matematico_1_LTA,
    this.tecnologia_ambiente_y_sociedad,
    this.quimica_general_e_inorganica,
    this.introduccion_a_la_informatica,
    this.fisica_general_1_LTA,
    this.geometria_y_algebra_lineal_LTA,
    this.quimica_organica_y_biologica_LTA,
    this.fisica_general_2_LTA,
    this.analisis_matematico_2_LTA,
    this.biologia_LTA,
    this.fundamentos_de_ecologia,
    this.quimica_ambiental_LTA,
    this.calculo_numerico_LTA,
    this.ciencias_de_la_tierra_1,
    this.mecanica_de_fluidos,
    this.legislacion_ambiental_LTA,
    this.economia_ambiental_LTA,
    this.probabilidades_y_estadistica_LTA,
    this.residuos_solidos,
    this.contaminacion_atmosferica,
    this.contaminacion_en_agua,
    this.formulacion_y_evaluacion_de_proyectos_LTA,
    this.ciencias_de_la_tierra_2,
    this.fluodinamica_ambiental,
    this.radiacion,
    this.tratamiento_de_efluentes_gaseosos,
    this.tratamiento_de_efluentes_liquidos,
    this.tratamiento_de_residuos_solidos,
    this.evaluacion_de_impacto_ambiental,
    this.optativa_1,
    this.optativa_2,
    this.optativa_3,
    this.optativa_4,
    this.optativa_5,
    this.pps,
    this.proyecto_final,
  ];

  constructor(private modalService: ModalService) {}

  public ngOnInit(): void {
    this.contaminacion_atmosferica.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.contaminacion_en_agua.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.formulacion_y_evaluacion_de_proyectos_LTA.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.ciencias_de_la_tierra_2.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.ciencias_de_la_tierra_2.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.fluodinamica_ambiental.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.fluodinamica_ambiental.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.radiacion.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.radiacion.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.tratamiento_de_efluentes_gaseosos.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.tratamiento_de_efluentes_liquidos.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.tratamiento_de_residuos_solidos.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_1.subject,
    });
    this.tratamiento_de_residuos_solidos.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.evaluacion_de_impacto_ambiental.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_2.subject,
    });
    this.evaluacion_de_impacto_ambiental.subject.correlatives.push({
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: this.optativa_3.subject,
    });
  }

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
        allSubjects: lta_subjects,
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
