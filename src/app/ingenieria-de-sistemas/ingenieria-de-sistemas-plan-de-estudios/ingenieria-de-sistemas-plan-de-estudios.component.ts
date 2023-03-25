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
  INGENIERIA_DE_SISTEMAS_NAME,
  ISubject,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  THIRD_YEAR_NAME,
} from 'src/app/catedras/interfaces';
import {
  CORRELATIVE_COLOR_SUBJECT,
  DEFAULT_COLOR_SUBJECT,
  REQUISITO_CURSADA_COLOR_SUBJECT,
  REQUISITO_FINAL_COLOR_SUBJECT,
  SELECTED_COLOR_SUBJECT,
} from 'src/app/common/constants';
import {
  algebra_1_with_selection,
  algebra_lineal_with_selection,
  analisis_matematico_1_with_selection,
  analisis_matematico_2_with_selection,
  analisis_y_diseño_de_algoritmos_1_with_selection,
  analisis_y_diseño_de_algoritmos_2_with_selection,
  arquitectura_de_computadoras_1_with_selection,
  arquitectura_de_computadoras_y_tecnicas_digitales_with_selection,
  bases_de_datos_1_with_selection,
  ciencias_de_la_computacion_1_with_selection,
  ciencias_de_la_computacion_2_with_selection,
  comunicacion_de_datos_1_with_selection,
  comunicacion_de_datos_2_with_selection,
  diseño_de_compiladores_1_with_selection,
  diseño_de_sistemas_de_software_with_selection,
  electricidad_y_magnetismo_with_selection,
  electronica_digital_with_selection,
  estructuras_de_almacenamiento_de_datos_with_selection,
  fisica_general_with_selection,
  fundamentos_de_economia_y_proyectos_de_inversion_with_selection,
  ingenieria_de_software_with_selection,
  ingles_with_selection,
  introduccion_al_calculo_diferencial_e_integral_with_selection,
  introduccion_a_la_arquitectura_de_sistemas_with_selection,
  introduccion_a_la_programacion_1_with_selection,
  introduccion_a_la_programacion_2_with_selection,
  investigacion_operativa_1_with_selection,
  legislacion_y_gestion_ambiental_with_selection,
  lenguajes_de_programacion_1_with_selection,
  matematica_discreta_with_selection,
  metodologias_de_desarrollo_de_software_1_with_selection,
  organizacion_empresarial_with_selection,
  probabilidades_y_estadistica_with_selection,
  programacion_exploratoria_with_selection,
  programacion_orientada_a_objetos_with_selection,
  quimica_with_selection,
  sistemas_operativos_1_with_selection,
  teoria_de_la_informacion_with_selection,
} from './plan-2011-constants';
import {
  ingles_plan_2024_with_selection,
  introduccion_al_algebra_plan_2024_with_selection,
  introduccion_a_la_programacion_1_plan_2024_with_selection,
  introduccion_a_los_sistemas_informaticos_plan_2024_with_selection,
  calculo_1_plan_2024_with_selection,
  disenio_logico_plan_2024_with_selection,
  introduccion_a_la_programacion_2_plan_2024_with_selection,
  lenguajes_formales_y_automatas_plan_2024_with_selection,
  algebra_lineal_plan_2024_with_selection,
  analisis_y_disenio_de_algoritmos_1_plan_2024_with_selection,
  arquitectura_de_computadoras_1_plan_2024_with_selection,
  programacion_orientada_a_objetos_plan_2024_with_selection,
  analisis_y_disenio_de_algoritmos_2_plan_2024_with_selection,
  calculo_2_plan_2024_with_selection,
  metodologias_de_desarrollo_de_software_plan_2024_with_selection,
  redes_de_computadoras_1_plan_2024_with_selection,
  base_de_datos_1_plan_2024_with_selection,
  fisica_1_plan_2024_with_selection,
  lenguajes_y_paradigmas_plan_2024_with_selection,
  sistemas_operativos_plan_2024_with_selection,
  base_de_datos_2_plan_2024_with_selection,
  ingenieria_de_software_1_plan_2024_with_selection,
  probabilidad_y_estadistica_plan_2024_with_selection,
  programacion_web_plan_2024_with_selection,
  fisica_2_plan_2024_with_selection,
  organizacion_empresarial_plan_2024_with_selection,
  redes_de_computadoras_2_plan_2024_with_selection,
  teoria_de_la_informacion_plan_2024_with_selection,
  arquitectura_de_computadoras_2_plan_2024_with_selection,
  calidad_de_software_plan_2024_with_selection,
  compiladores_e_interpretes_plan_2024_with_selection,
  fundamentos_de_la_ciencia_de_datos_plan_2024_with_selection,
  ciberseguridad_plan_2024_with_selection,
  ingenieria_de_software_2_plan_2024_with_selection,
  inteligencia_artificial_plan_2024_with_selection,
  etica_y_legislacion_de_la_practica_profesional_plan_2024_with_selection,
  formulacion_y_evaluacion_de_proyectos_tics_plan_2024_with_selection,
  practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024_with_selection,
} from './plan-2024-constants';
import { ISubjectWithSelection } from '../../common/interfaces';
import { ingenieria_de_sistemas_subjects_plan_2011 } from 'src/app/catedras/ingenieria-de-sistemas-plan-2011';

@Component({
  selector: 'app-ingenieria-de-sistemas-plan-de-estudios',
  templateUrl: './ingenieria-de-sistemas-plan-de-estudios.component.html',
  styleUrls: ['./ingenieria-de-sistemas-plan-de-estudios.component.scss'],
})
export class IngenieriaDeSistemasPlanDeEstudiosComponent implements OnInit {
  public isPlanEstudiosTileVisible: boolean = false;
  public isPlanEstudios2011TileVisible: boolean = false;
  public isPlanEstudios2024TileVisible: boolean = false;

  public algebra_1: ISubjectWithSelection = algebra_1_with_selection;
  public algebra_lineal: ISubjectWithSelection = algebra_lineal_with_selection;
  public analisis_matematico_1: ISubjectWithSelection =
    analisis_matematico_1_with_selection;
  public analisis_matematico_2: ISubjectWithSelection =
    analisis_matematico_2_with_selection;
  public analisis_y_disenio_de_algoritmos_1: ISubjectWithSelection =
    analisis_y_diseño_de_algoritmos_1_with_selection;
  public analisis_y_disenio_de_algoritmos_2: ISubjectWithSelection =
    analisis_y_diseño_de_algoritmos_2_with_selection;
  public arquitectura_de_computadoras_1: ISubjectWithSelection =
    arquitectura_de_computadoras_1_with_selection;
  public arquitectura_de_computadoras_y_tecnicas_digitales: ISubjectWithSelection =
    arquitectura_de_computadoras_y_tecnicas_digitales_with_selection;
  public bases_de_datos_1: ISubjectWithSelection =
    bases_de_datos_1_with_selection;
  public ciencias_de_la_computacion_1: ISubjectWithSelection =
    ciencias_de_la_computacion_1_with_selection;
  public ciencias_de_la_computacion_2: ISubjectWithSelection =
    ciencias_de_la_computacion_2_with_selection;
  public comunicacion_de_datos_1: ISubjectWithSelection =
    comunicacion_de_datos_1_with_selection;
  public comunicacion_de_datos_2: ISubjectWithSelection =
    comunicacion_de_datos_2_with_selection;
  public disenio_de_compiladores_1: ISubjectWithSelection =
    diseño_de_compiladores_1_with_selection;
  public disenio_de_sistemas_de_software: ISubjectWithSelection =
    diseño_de_sistemas_de_software_with_selection;
  public electricidad_y_magnetismo: ISubjectWithSelection =
    electricidad_y_magnetismo_with_selection;
  public electronica_digital: ISubjectWithSelection =
    electronica_digital_with_selection;
  public estructuras_de_almacenamiento_de_datos: ISubjectWithSelection =
    estructuras_de_almacenamiento_de_datos_with_selection;
  public fundamentos_de_economia_y_proyectos_de_inversion: ISubjectWithSelection =
    fundamentos_de_economia_y_proyectos_de_inversion_with_selection;
  public fisica_general: ISubjectWithSelection = fisica_general_with_selection;
  public ingenieria_de_software: ISubjectWithSelection =
    ingenieria_de_software_with_selection;
  public ingles: ISubjectWithSelection = ingles_with_selection;
  public introduccion_a_la_arquitectura_de_sistemas: ISubjectWithSelection =
    introduccion_a_la_arquitectura_de_sistemas_with_selection;
  public introduccion_a_la_programacion_1: ISubjectWithSelection =
    introduccion_a_la_programacion_1_with_selection;
  public introduccion_a_la_programacion_2: ISubjectWithSelection =
    introduccion_a_la_programacion_2_with_selection;
  public introduccion_al_calculo_diferencial_e_integral: ISubjectWithSelection =
    introduccion_al_calculo_diferencial_e_integral_with_selection;
  public investigacion_operativa_1: ISubjectWithSelection =
    investigacion_operativa_1_with_selection;
  public legislacion_y_gestion_ambiental: ISubjectWithSelection =
    legislacion_y_gestion_ambiental_with_selection;
  public lenguajes_de_programacion_1: ISubjectWithSelection =
    lenguajes_de_programacion_1_with_selection;
  public matematica_discreta: ISubjectWithSelection =
    matematica_discreta_with_selection;
  public metodologias_de_desarrollo_de_software_1: ISubjectWithSelection =
    metodologias_de_desarrollo_de_software_1_with_selection;
  public organizacion_empresarial: ISubjectWithSelection =
    organizacion_empresarial_with_selection;
  public probabilidades_y_estadistica: ISubjectWithSelection =
    probabilidades_y_estadistica_with_selection;
  public programacion_exploratoria: ISubjectWithSelection =
    programacion_exploratoria_with_selection;
  public programacion_orientada_a_objetos: ISubjectWithSelection =
    programacion_orientada_a_objetos_with_selection;
  public quimica: ISubjectWithSelection = quimica_with_selection;
  public sistemas_operativos_1: ISubjectWithSelection =
    sistemas_operativos_1_with_selection;
  public teoria_de_la_informacion: ISubjectWithSelection =
    teoria_de_la_informacion_with_selection;

  public pps: ISubjectWithSelection = {
    subject: {
      id: '',
      name: 'Práctica Profesional Supervisada',
      status: '',
      career: INGENIERIA_DE_SISTEMAS_NAME,
      year: FIFTH_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
      teacher: '',
      contactEmail: '',
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
          subject: this.quimica.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.comunicacion_de_datos_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ingles.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.arquitectura_de_computadoras_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.estructuras_de_almacenamiento_de_datos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.metodologias_de_desarrollo_de_software_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.programacion_orientada_a_objetos.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public proyecto_final: ISubjectWithSelection = {
    subject: {
      id: '',
      name: 'Proyecto Final',
      status: '',
      career: INGENIERIA_DE_SISTEMAS_NAME,
      year: FIFTH_YEAR_NAME,
      quarter: SECOND_QUARTER_NAME,
      teacher: '',
      contactEmail: '',
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
          subject: this.quimica.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.comunicacion_de_datos_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.ingles.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.arquitectura_de_computadoras_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.estructuras_de_almacenamiento_de_datos.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.metodologias_de_desarrollo_de_software_1.subject,
        },
        {
          typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
          subject: this.programacion_orientada_a_objetos.subject,
        },
      ],
    },
    color: DEFAULT_COLOR_SUBJECT,
  };

  public allPlan2011Subjects: ISubjectWithSelection[] = [
    this.algebra_1,
    this.algebra_lineal,
    this.analisis_matematico_1,
    this.analisis_matematico_2,
    this.analisis_y_disenio_de_algoritmos_1,
    this.analisis_y_disenio_de_algoritmos_2,
    this.arquitectura_de_computadoras_1,
    this.arquitectura_de_computadoras_y_tecnicas_digitales,
    this.bases_de_datos_1,
    this.ciencias_de_la_computacion_1,
    this.ciencias_de_la_computacion_2,
    this.comunicacion_de_datos_1,
    this.comunicacion_de_datos_2,
    this.disenio_de_compiladores_1,
    this.disenio_de_sistemas_de_software,
    this.electricidad_y_magnetismo,
    this.electronica_digital,
    this.estructuras_de_almacenamiento_de_datos,
    this.fundamentos_de_economia_y_proyectos_de_inversion,
    this.fisica_general,
    this.ingenieria_de_software,
    this.ingles,
    this.introduccion_a_la_arquitectura_de_sistemas,
    this.introduccion_a_la_programacion_1,
    this.introduccion_a_la_programacion_2,
    this.introduccion_al_calculo_diferencial_e_integral,
    this.investigacion_operativa_1,
    this.legislacion_y_gestion_ambiental,
    this.lenguajes_de_programacion_1,
    this.matematica_discreta,
    this.metodologias_de_desarrollo_de_software_1,
    this.organizacion_empresarial,
    this.probabilidades_y_estadistica,
    this.programacion_exploratoria,
    this.programacion_orientada_a_objetos,
    this.quimica,
    this.sistemas_operativos_1,
    this.teoria_de_la_informacion,
    this.pps,
    this.proyecto_final,
  ];

  public ingles_plan_2024: ISubjectWithSelection =
    ingles_plan_2024_with_selection;
  public introduccion_al_algebra_plan_2024: ISubjectWithSelection =
    introduccion_al_algebra_plan_2024_with_selection;
  public introduccion_a_la_programacion_1_plan_2024: ISubjectWithSelection =
    introduccion_a_la_programacion_1_plan_2024_with_selection;
  public introduccion_a_los_sistemas_informaticos_plan_2024: ISubjectWithSelection =
    introduccion_a_los_sistemas_informaticos_plan_2024_with_selection;
  public calculo_1_plan_2024: ISubjectWithSelection =
    calculo_1_plan_2024_with_selection;
  public disenio_logico_plan_2024: ISubjectWithSelection =
    disenio_logico_plan_2024_with_selection;
  public introduccion_a_la_programacion_2_plan_2024: ISubjectWithSelection =
    introduccion_a_la_programacion_2_plan_2024_with_selection;
  public lenguajes_formales_y_automatas_plan_2024: ISubjectWithSelection =
    lenguajes_formales_y_automatas_plan_2024_with_selection;
  public algebra_lineal_plan_2024: ISubjectWithSelection =
    algebra_lineal_plan_2024_with_selection;
  public analisis_y_disenio_de_algoritmos_1_plan_2024: ISubjectWithSelection =
    analisis_y_disenio_de_algoritmos_1_plan_2024_with_selection;
  public arquitectura_de_computadoras_1_plan_2024: ISubjectWithSelection =
    arquitectura_de_computadoras_1_plan_2024_with_selection;
  public programacion_orientada_a_objetos_plan_2024: ISubjectWithSelection =
    programacion_orientada_a_objetos_plan_2024_with_selection;
  public analisis_y_disenio_de_algoritmos_2_plan_2024: ISubjectWithSelection =
    analisis_y_disenio_de_algoritmos_2_plan_2024_with_selection;
  public calculo_2_plan_2024: ISubjectWithSelection =
    calculo_2_plan_2024_with_selection;
  public metodologias_de_desarrollo_de_software_plan_2024: ISubjectWithSelection =
    metodologias_de_desarrollo_de_software_plan_2024_with_selection;
  public redes_de_computadoras_1_plan_2024: ISubjectWithSelection =
    redes_de_computadoras_1_plan_2024_with_selection;
  public base_de_datos_1_plan_2024: ISubjectWithSelection =
    base_de_datos_1_plan_2024_with_selection;
  public fisica_1_plan_2024: ISubjectWithSelection =
    fisica_1_plan_2024_with_selection;
  public lenguajes_y_paradigmas_plan_2024: ISubjectWithSelection =
    lenguajes_y_paradigmas_plan_2024_with_selection;
  public sistemas_operativos_plan_2024: ISubjectWithSelection =
    sistemas_operativos_plan_2024_with_selection;
  public base_de_datos_2_plan_2024: ISubjectWithSelection =
    base_de_datos_2_plan_2024_with_selection;
  public ingenieria_de_software_1_plan_2024: ISubjectWithSelection =
    ingenieria_de_software_1_plan_2024_with_selection;
  public probabilidad_y_estadistica_plan_2024: ISubjectWithSelection =
    probabilidad_y_estadistica_plan_2024_with_selection;
  public programacion_web_plan_2024: ISubjectWithSelection =
    programacion_web_plan_2024_with_selection;
  public fisica_2_plan_2024: ISubjectWithSelection =
    fisica_2_plan_2024_with_selection;
  public organizacion_empresarial_plan_2024: ISubjectWithSelection =
    organizacion_empresarial_plan_2024_with_selection;
  public redes_de_computadoras_2_plan_2024: ISubjectWithSelection =
    redes_de_computadoras_2_plan_2024_with_selection;
  public teoria_de_la_informacion_plan_2024: ISubjectWithSelection =
    teoria_de_la_informacion_plan_2024_with_selection;
  public arquitectura_de_computadoras_2_plan_2024: ISubjectWithSelection =
    arquitectura_de_computadoras_2_plan_2024_with_selection;
  public calidad_de_software_plan_2024: ISubjectWithSelection =
    calidad_de_software_plan_2024_with_selection;
  public compiladores_e_interpretes_plan_2024: ISubjectWithSelection =
    compiladores_e_interpretes_plan_2024_with_selection;
  public fundamentos_de_la_ciencia_de_datos_plan_2024: ISubjectWithSelection =
    fundamentos_de_la_ciencia_de_datos_plan_2024_with_selection;
  public ciberseguridad_plan_2024: ISubjectWithSelection =
    ciberseguridad_plan_2024_with_selection;
  public ingenieria_de_software_2_plan_2024: ISubjectWithSelection =
    ingenieria_de_software_2_plan_2024_with_selection;
  public inteligencia_artificial_plan_2024: ISubjectWithSelection =
    inteligencia_artificial_plan_2024_with_selection;
  public etica_y_legislacion_de_la_practica_profesional_plan_2024: ISubjectWithSelection =
    etica_y_legislacion_de_la_practica_profesional_plan_2024_with_selection;
  public formulacion_y_evaluacion_de_proyectos_tics_plan_2024: ISubjectWithSelection =
    formulacion_y_evaluacion_de_proyectos_tics_plan_2024_with_selection;
  public practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024: ISubjectWithSelection =
    practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024_with_selection;

  public allPlan2024Subjects: ISubjectWithSelection[] = [
    this.ingles_plan_2024,
    this.introduccion_al_algebra_plan_2024,
    this.introduccion_a_la_programacion_1_plan_2024,
    this.introduccion_a_los_sistemas_informaticos_plan_2024,
    this.calculo_1_plan_2024,
    this.disenio_logico_plan_2024,
    this.introduccion_a_la_programacion_2_plan_2024,
    this.lenguajes_formales_y_automatas_plan_2024,
    this.algebra_lineal_plan_2024,
    this.analisis_y_disenio_de_algoritmos_1_plan_2024,
    this.arquitectura_de_computadoras_1_plan_2024,
    this.programacion_orientada_a_objetos_plan_2024,
    this.analisis_y_disenio_de_algoritmos_2_plan_2024,
    this.calculo_2_plan_2024,
    this.metodologias_de_desarrollo_de_software_plan_2024,
    this.redes_de_computadoras_1_plan_2024,
    this.base_de_datos_1_plan_2024,
    this.fisica_1_plan_2024,
    this.lenguajes_y_paradigmas_plan_2024,
    this.sistemas_operativos_plan_2024,
    this.base_de_datos_2_plan_2024,
    this.ingenieria_de_software_1_plan_2024,
    this.probabilidad_y_estadistica_plan_2024,
    this.programacion_web_plan_2024,
    this.fisica_2_plan_2024,
    this.organizacion_empresarial_plan_2024,
    this.redes_de_computadoras_2_plan_2024,
    this.teoria_de_la_informacion_plan_2024,
    this.arquitectura_de_computadoras_2_plan_2024,
    this.calidad_de_software_plan_2024,
    this.compiladores_e_interpretes_plan_2024,
    this.fundamentos_de_la_ciencia_de_datos_plan_2024,
    this.ciberseguridad_plan_2024,
    this.ingenieria_de_software_2_plan_2024,
    this.inteligencia_artificial_plan_2024,
    this.etica_y_legislacion_de_la_practica_profesional_plan_2024,
    this.formulacion_y_evaluacion_de_proyectos_tics_plan_2024,
    this.practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024,
  ];

  constructor(private modalService: ModalService) {}

  public ngOnInit(): void {}

  public onMouseOverSubject(
    allPlanSubjects: ISubjectWithSelection[],
    subjectToEvaluate: ISubjectWithSelection
  ): void {
    subjectToEvaluate.color = SELECTED_COLOR_SUBJECT;
    this.paintCorrelativesSubjects(
      subjectToEvaluate,
      subjectToEvaluate,
      allPlanSubjects
    );
    this.paintSubjectsThatObstruct(subjectToEvaluate, allPlanSubjects);
  }

  public onMouseLeaveSubject(allPlanSubjects: ISubjectWithSelection[]): void {
    allPlanSubjects.forEach((subject: ISubjectWithSelection) => {
      subject.color = DEFAULT_COLOR_SUBJECT;
    });
  }

  public showCatedraModalWindow(subject: ISubjectWithSelection): void {
    this.modalService.create({
      component: CatedraModalWindowComponent,
      inputs: {
        subject: subject.subject,
        allSubjects: ingenieria_de_sistemas_subjects_plan_2011,
      },
    });
  }

  public onPlanEstudiosTileClick(): void {
    this.isPlanEstudiosTileVisible = !this.isPlanEstudiosTileVisible;
  }

  public onPlanEstudios2011TileClick(): void {
    this.isPlanEstudios2011TileVisible = !this.isPlanEstudios2011TileVisible;
  }

  public onPlanEstudios2024TileClick(): void {
    this.isPlanEstudios2024TileVisible = !this.isPlanEstudios2024TileVisible;
  }

  private paintCorrelativesSubjects(
    subjectToEvaluateOriginal: ISubjectWithSelection,
    nextSubjectToEvaluate: ISubjectWithSelection,
    allPlanSubjects: ISubjectWithSelection[]
  ): void {
    nextSubjectToEvaluate.subject.correlatives.forEach(
      (correlativeSubject: ICorrelativeSubject) => {
        allPlanSubjects.forEach((subject: ISubjectWithSelection) => {
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
            this.paintCorrelativesSubjects(
              subjectToEvaluateOriginal,
              subject,
              allPlanSubjects
            );
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
    } else if (
      subject.year === FIFTH_YEAR_NAME &&
      subject.quarter === SECOND_QUARTER_NAME
    ) {
      if (
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME) ||
        (subjectToEvaluate.year === FIRST_YEAR_NAME &&
          subjectToEvaluate.quarter === SECOND_QUARTER_NAME) ||
        (subjectToEvaluate.year === SECOND_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME) ||
        (subjectToEvaluate.year === SECOND_YEAR_NAME &&
          subjectToEvaluate.quarter === SECOND_QUARTER_NAME) ||
        (subjectToEvaluate.year === THIRD_YEAR_NAME &&
          subjectToEvaluate.quarter === FIRST_QUARTER_NAME)
      ) {
        return true;
      }
    }
    return false;
  }

  private paintSubjectsThatObstruct(
    subjectToEvaluate: ISubjectWithSelection,
    allPlanSubjects: ISubjectWithSelection[]
  ): void {
    allPlanSubjects.forEach((subject: ISubjectWithSelection) => {
      subject.subject.correlatives.forEach(
        (correlativeSubject: ICorrelativeSubject) => {
          if (correlativeSubject.subject.id == subjectToEvaluate.subject.id) {
            subject.color = CORRELATIVE_COLOR_SUBJECT;
            this.paintSubjectsThatObstruct(subject, allPlanSubjects);
          }
        }
      );
    });
  }
}
