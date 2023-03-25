import {
  CORRELATIVE_CURSADA_NAME,
  FIFTH_YEAR_NAME,
  FIRST_QUARTER_NAME,
  FIRST_YEAR_NAME,
  FOURTH_YEAR_NAME,
  INGENIERIA_DE_SISTEMAS_NAME,
  ISubject,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  THIRD_YEAR_NAME,
} from './interfaces';

export let ingles_plan_2024: ISubject = {
  id: 'ingles_plan_2024',
  name: 'Inglés',
  status: localStorage.getItem('ingles_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
  correlatives: [],
};

export let introduccion_al_algebra_plan_2024: ISubject = {
  id: 'introduccion_al_algebra_plan_2024',
  name: 'Introducción al Álgebra',
  status: localStorage.getItem('introduccion_al_algebra_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
  correlatives: [],
};

export let introduccion_a_la_programacion_1_plan_2024: ISubject = {
  id: 'introduccion_a_la_programacion_1_plan_2024',
  name: 'Introducción a la Programación I',
  status: localStorage.getItem('introduccion_a_la_programacion_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
  correlatives: [],
};

export let introduccion_a_los_sistemas_informaticos_plan_2024: ISubject = {
  id: 'introduccion_a_los_sistemas_informaticos_plan_2024',
  name: 'Introducción a los sistemas informáticos',
  status: localStorage.getItem(
    'introduccion_a_los_sistemas_informaticos_plan_2024'
  ),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
  correlatives: [],
};

export let calculo_1_plan_2024: ISubject = {
  id: 'calculo_1_plan_2024',
  name: 'Cálculo I',
  status: localStorage.getItem('calculo_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
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
  correlatives: [],
};

export let disenio_logico_plan_2024: ISubject = {
  id: 'disenio_logico_plan_2024',
  name: 'Diseño Lógico',
  status: localStorage.getItem('disenio_logico_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_al_algebra_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_los_sistemas_informaticos_plan_2024,
    },
  ],
};

export let introduccion_a_la_programacion_2_plan_2024: ISubject = {
  id: 'introduccion_a_la_programacion_2_plan_2024',
  name: 'Introducción a la Programación II',
  status: localStorage.getItem('introduccion_a_la_programacion_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_1_plan_2024,
    },
  ],
};

export let lenguajes_formales_y_automatas_plan_2024: ISubject = {
  id: 'lenguajes_formales_y_automatas_plan_2024',
  name: 'Lenguajes Formales y Autómatas',
  status: localStorage.getItem('lenguajes_formales_y_automatas_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIRST_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_al_algebra_plan_2024,
    },
  ],
};

export let algebra_lineal_plan_2024: ISubject = {
  id: 'algebra_lineal_plan_2024',
  name: 'Algebra Lineal',
  status: localStorage.getItem('algebra_lineal_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_al_algebra_plan_2024,
    },
  ],
};

export let analisis_y_disenio_de_algoritmos_1_plan_2024: ISubject = {
  id: 'analisis_y_disenio_de_algoritmos_1_plan_2024',
  name: 'Análisis y Diseño de Algoritmos I',
  status: localStorage.getItem('analisis_y_disenio_de_algoritmos_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_al_algebra_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: calculo_1_plan_2024,
    },
  ],
};

export let arquitectura_de_computadoras_1_plan_2024: ISubject = {
  id: 'arquitectura_de_computadoras_1_plan_2024',
  name: 'Arquitectura de computadoras I',
  status: localStorage.getItem('arquitectura_de_computadoras_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: disenio_logico_plan_2024,
    },
  ],
};

export let programacion_orientada_a_objetos_plan_2024: ISubject = {
  id: 'programacion_orientada_a_objetos_plan_2024',
  name: 'Programación Orientada a Objetos',
  status: localStorage.getItem('programacion_orientada_a_objetos_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2_plan_2024,
    },
  ],
};

export let analisis_y_disenio_de_algoritmos_2_plan_2024: ISubject = {
  id: 'analisis_y_disenio_de_algoritmos_2_plan_2024',
  name: 'Análisis y Diseño de Algoritmos II',
  status: localStorage.getItem('analisis_y_disenio_de_algoritmos_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_1_plan_2024,
    },
  ],
};

export let calculo_2_plan_2024: ISubject = {
  id: 'calculo_2_plan_2024',
  name: 'Cálculo II',
  status: localStorage.getItem('calculo_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: calculo_1_plan_2024,
    },
  ],
};

export let metodologias_de_desarrollo_de_software_plan_2024: ISubject = {
  id: 'metodologias_de_desarrollo_de_software_plan_2024',
  name: 'Metodologías de Desarrollo de Software',
  status: localStorage.getItem(
    'metodologias_de_desarrollo_de_software_plan_2024'
  ),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: programacion_orientada_a_objetos_plan_2024,
    },
  ],
};

export let redes_de_computadoras_1_plan_2024: ISubject = {
  id: 'redes_de_computadoras_1_plan_2024',
  name: 'Redes de Computadoras I',
  status: localStorage.getItem('redes_de_computadoras_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: SECOND_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_los_sistemas_informaticos_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2_plan_2024,
    },
  ],
};

export let base_de_datos_1_plan_2024: ISubject = {
  id: 'base_de_datos_1_plan_2024',
  name: 'Base de Datos I',
  status: localStorage.getItem('base_de_datos_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_1_plan_2024,
    },
  ],
};

export let fisica_1_plan_2024: ISubject = {
  id: 'fisica_1_plan_2024',
  name: 'Física I',
  status: localStorage.getItem('fisica_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: calculo_1_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: algebra_lineal_plan_2024,
    },
  ],
};

export let lenguajes_y_paradigmas_plan_2024: ISubject = {
  id: 'lenguajes_y_paradigmas_plan_2024',
  name: 'Lenguajes y Paradigmas',
  status: localStorage.getItem('lenguajes_y_paradigmas_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: lenguajes_formales_y_automatas_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: arquitectura_de_computadoras_1_plan_2024,
    },
  ],
};

export let sistemas_operativos_plan_2024: ISubject = {
  id: 'sistemas_operativos_plan_2024',
  name: 'Sistemas Operativos',
  status: localStorage.getItem('sistemas_operativos_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: arquitectura_de_computadoras_1_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_2_plan_2024,
    },
  ],
};

export let base_de_datos_2_plan_2024: ISubject = {
  id: 'base_de_datos_2_plan_2024',
  name: 'Bases de Datos II',
  status: localStorage.getItem('base_de_datos_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_2_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: base_de_datos_1_plan_2024,
    },
  ],
};

export let ingenieria_de_software_1_plan_2024: ISubject = {
  id: 'ingenieria_de_software_1_plan_2024',
  name: 'Ingeniera de Software I',
  status: localStorage.getItem('ingenieria_de_software_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: metodologias_de_desarrollo_de_software_plan_2024,
    },
  ],
};

export let probabilidad_y_estadistica_plan_2024: ISubject = {
  id: 'probabilidad_y_estadistica_plan_2024',
  name: 'Probabilidad y Estadística',
  status: localStorage.getItem('probabilidad_y_estadistica_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: calculo_1_plan_2024,
    },
  ],
};

export let programacion_web_plan_2024: ISubject = {
  id: 'programacion_web_plan_2024',
  name: 'Programación Web',
  status: localStorage.getItem('programacion_web_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: THIRD_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: metodologias_de_desarrollo_de_software_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: base_de_datos_1_plan_2024,
    },
  ],
};

export let fisica_2_plan_2024: ISubject = {
  id: 'fisica_2_plan_2024',
  name: 'Física II',
  status: localStorage.getItem('fisica_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: calculo_2_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: fisica_1_plan_2024,
    },
  ],
};

export let organizacion_empresarial_plan_2024: ISubject = {
  id: 'organizacion_empresarial_plan_2024',
  name: 'Organización Empresarial',
  status: localStorage.getItem('organizacion_empresarial_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: metodologias_de_desarrollo_de_software_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: probabilidad_y_estadistica_plan_2024,
    },
  ],
};

export let redes_de_computadoras_2_plan_2024: ISubject = {
  id: 'redes_de_computadoras_2_plan_2024',
  name: 'Redes de Computadoras II',
  status: localStorage.getItem('redes_de_computadoras_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: redes_de_computadoras_1_plan_2024,
    },
  ],
};

export let teoria_de_la_informacion_plan_2024: ISubject = {
  id: 'teoria_de_la_informacion_plan_2024',
  name: 'Teoría de la Información',
  status: localStorage.getItem('teoria_de_la_informacion_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: algebra_lineal_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_2_plan_2024,
    },
  ],
};

export let arquitectura_de_computadoras_2_plan_2024: ISubject = {
  id: 'arquitectura_de_computadoras_2_plan_2024',
  name: 'Arquitectura de Computadoras II',
  status: localStorage.getItem('arquitectura_de_computadoras_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: arquitectura_de_computadoras_1_plan_2024,
    },
  ],
};

export let calidad_de_software_plan_2024: ISubject = {
  id: 'calidad_de_software_plan_2024',
  name: 'Calidad de Software',
  status: localStorage.getItem('calidad_de_software_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ingenieria_de_software_1_plan_2024,
    },
  ],
};

export let compiladores_e_interpretes_plan_2024: ISubject = {
  id: 'compiladores_e_interpretes_plan_2024',
  name: 'Compiladores e Intérpretes',
  status: localStorage.getItem('compiladores_e_interpretes_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: lenguajes_y_paradigmas_plan_2024,
    },
  ],
};

export let fundamentos_de_la_ciencia_de_datos_plan_2024: ISubject = {
  id: 'fundamentos_de_la_ciencia_de_datos_plan_2024',
  name: 'Fundamentos de la Ciencia de Datos',
  status: localStorage.getItem('fundamentos_de_la_ciencia_de_datos_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FOURTH_YEAR_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: algebra_lineal_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: base_de_datos_1_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: probabilidad_y_estadistica_plan_2024,
    },
  ],
};

export let ciberseguridad_plan_2024: ISubject = {
  id: 'ciberseguridad_plan_2024',
  name: 'Ciberseguridad',
  status: localStorage.getItem('ciberseguridad_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_2_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: redes_de_computadoras_1_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: probabilidad_y_estadistica_plan_2024,
    },
  ],
};

export let ingenieria_de_software_2_plan_2024: ISubject = {
  id: 'ingenieria_de_software_2_plan_2024',
  name: 'Ingeniería de Software II',
  status: localStorage.getItem('ingenieria_de_software_2_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: calidad_de_software_plan_2024,
    },
  ],
};

export let inteligencia_artificial_plan_2024: ISubject = {
  id: 'inteligencia_artificial_plan_2024',
  name: 'Inteligencia Artificial',
  status: localStorage.getItem('inteligencia_artificial_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: fundamentos_de_la_ciencia_de_datos_plan_2024,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_disenio_de_algoritmos_2_plan_2024,
    },
  ],
};

export let etica_y_legislacion_de_la_practica_profesional_plan_2024: ISubject =
  {
    id: 'etica_y_legislacion_de_la_practica_profesional_plan_2024',
    name: 'Ética y Legislación de la práctica profesional',
    status: localStorage.getItem(
      'etica_y_legislacion_de_la_practica_profesional_plan_2024'
    ),
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
        typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
        subject: organizacion_empresarial_plan_2024,
      },
    ],
  };

export let formulacion_y_evaluacion_de_proyectos_tics_plan_2024: ISubject = {
  id: 'formulacion_y_evaluacion_de_proyectos_tics_plan_2024',
  name: 'Formulación y Evaluación de Proyectos TICs',
  status: localStorage.getItem(
    'formulacion_y_evaluacion_de_proyectos_tics_plan_2024'
  ),
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
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: organizacion_empresarial_plan_2024,
    },
  ],
};

export let practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024: ISubject =
  {
    id: 'practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024',
    name: 'Prácticas Profesionales Supervisadas y Proyecto integrador',
    status: localStorage.getItem(
      'practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024'
    ),
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
    correlatives: [],
  };

export let ingenieria_de_sistemas_subjects_plan_2024: ISubject[] = [
  ingles_plan_2024,
  introduccion_al_algebra_plan_2024,
  introduccion_a_la_programacion_1_plan_2024,
  introduccion_a_los_sistemas_informaticos_plan_2024,
  calculo_1_plan_2024,
  disenio_logico_plan_2024,
  introduccion_a_la_programacion_2_plan_2024,
  lenguajes_formales_y_automatas_plan_2024,
  algebra_lineal_plan_2024,
  analisis_y_disenio_de_algoritmos_1_plan_2024,
  arquitectura_de_computadoras_1_plan_2024,
  programacion_orientada_a_objetos_plan_2024,
  analisis_y_disenio_de_algoritmos_2_plan_2024,
  calculo_2_plan_2024,
  metodologias_de_desarrollo_de_software_plan_2024,
  redes_de_computadoras_1_plan_2024,
  base_de_datos_1_plan_2024,
  fisica_1_plan_2024,
  lenguajes_y_paradigmas_plan_2024,
  sistemas_operativos_plan_2024,
  base_de_datos_2_plan_2024,
  ingenieria_de_software_1_plan_2024,
  probabilidad_y_estadistica_plan_2024,
  programacion_web_plan_2024,
  fisica_2_plan_2024,
  organizacion_empresarial_plan_2024,
  redes_de_computadoras_2_plan_2024,
  teoria_de_la_informacion_plan_2024,
  arquitectura_de_computadoras_2_plan_2024,
  calidad_de_software_plan_2024,
  compiladores_e_interpretes_plan_2024,
  fundamentos_de_la_ciencia_de_datos_plan_2024,
  ciberseguridad_plan_2024,
  ingenieria_de_software_2_plan_2024,
  inteligencia_artificial_plan_2024,
  etica_y_legislacion_de_la_practica_profesional_plan_2024,
  formulacion_y_evaluacion_de_proyectos_tics_plan_2024,
  practicas_profesionales_supervisadas_y_proyecto_integrador_plan_2024,
];
