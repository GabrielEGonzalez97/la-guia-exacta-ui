import { Component, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { CatedraModalWindowComponent } from '../catedras/catedra-modal-window/catedra-modal-window.component';
import { SUBJECTS } from '../catedras/constants';
import {
  CORRELATIVE_FINAL_NAME,
  ICorrelativeSubject,
} from '../catedras/interfaces';
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
  correlativeColorSubject,
  defaultColorSubject,
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
  requisitoCursadaColorSubject,
  requisitoFinalColorSubject,
  selectedColorSubject,
  sistemas_operativos_1_with_selection,
  teoria_de_la_informacion_with_selection,
} from './constants';
import { ISubjectWithSelection } from './interfaces';

@Component({
  selector: 'app-ingenieria-de-sistemas',
  templateUrl: './ingenieria-de-sistemas.component.html',
  styleUrls: ['./ingenieria-de-sistemas.component.scss'],
})
export class IngenieriaDeSistemasComponent implements OnInit {
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

  public allSubjects: ISubjectWithSelection[] = [
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
  ];

  constructor(private modalService: ModalService) {}

  public ngOnInit(): void {}

  public onMouseOverSubject(subjectToEvaluate: ISubjectWithSelection): void {
    subjectToEvaluate.color = selectedColorSubject;
    this.paintCorrelativesSubjects(subjectToEvaluate);
    this.paintSubjectsThatObstruct(subjectToEvaluate);
  }

  public onMouseLeaveSubject(): void {
    this.allSubjects.forEach((subject: ISubjectWithSelection) => {
      subject.color = defaultColorSubject;
    });
  }

  public showCatedraModalWindow(subject: ISubjectWithSelection): void {
    this.modalService.create({
      component: CatedraModalWindowComponent,
      inputs: {
        subject: subject.subject,
        allSubjects: SUBJECTS,
      },
    });
  }

  private paintCorrelativesSubjects(
    subjectToEvaluate: ISubjectWithSelection
  ): void {
    subjectToEvaluate.subject.correlatives.forEach(
      (correlativeSubject: ICorrelativeSubject) => {
        this.allSubjects.forEach((subject: ISubjectWithSelection) => {
          if (correlativeSubject.subject.id == subject.subject.id) {
            if (
              correlativeSubject.typeOfCorrelativity == CORRELATIVE_FINAL_NAME
            ) {
              subject.color = requisitoFinalColorSubject;
            } else {
              if (subject.color === requisitoCursadaColorSubject) {
                subject.color = requisitoFinalColorSubject;
              } else if (subject.color !== requisitoFinalColorSubject) {
                subject.color = requisitoCursadaColorSubject;
              }
            }
            console.log(subject.subject.name + ': ' + subject.color);
            this.paintCorrelativesSubjects(subject);
          }
        });
      }
    );
  }

  private paintSubjectsThatObstruct(
    subjectToEvaluate: ISubjectWithSelection
  ): void {
    this.allSubjects.forEach((subject: ISubjectWithSelection) => {
      subject.subject.correlatives.forEach(
        (correlativeSubject: ICorrelativeSubject) => {
          if (correlativeSubject.subject.id == subjectToEvaluate.subject.id) {
            subject.color = correlativeColorSubject;
            this.paintSubjectsThatObstruct(subject);
          }
        }
      );
    });
  }
}
