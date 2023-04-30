import {
  CORRELATIVE_CURSADA_NAME,
  CORRELATIVE_FINAL_NAME,
  FIFTH_YEAR_NAME,
  FIRST_QUARTER_NAME,
  FIRST_YEAR_NAME,
  FOURTH_YEAR_NAME,
  ISubject,
  LTA_NAME,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  THIRD_YEAR_NAME,
} from './interfaces';

export let analisis_matematico_1_LTA: ISubject = {
  id: 'analisis_matematico_1_LTA',
  name: 'Análisis Matemático I',
  status: localStorage.getItem('analisis_matematico_1_LTA'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'analisis-matematico-i-lta',
  parcialesLink: 'analisis-matematico-i-lta',
  finalesLink: 'analisis-matematico-i-lta',
  correlatives: [],
};

export let tecnologia_ambiente_y_sociedad: ISubject = {
  id: 'tecnologia_ambiente_y_sociedad',
  name: 'Tecnología, Ambiente y Sociedad',
  status: localStorage.getItem('tecnologia_ambiente_y_sociedad'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'tecnologia-ambiente-y-sociedad',
  parcialesLink: 'tecnologia-ambiente-y-sociedad',
  finalesLink: 'tecnologia-ambiente-y-sociedad',
  correlatives: [],
};

export let quimica_general_e_inorganica: ISubject = {
  id: 'quimica_general_e_inorganica',
  name: 'Química General e Inorgánica',
  status: localStorage.getItem('quimica_general_e_inorganica'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'quimica-general-e-inorganica',
  parcialesLink: 'quimica-general-e-inorganica',
  finalesLink: 'quimica-general-e-inorganica',
  correlatives: [],
};

export let introduccion_a_la_informatica: ISubject = {
  id: 'introduccion_a_la_informatica',
  name: 'Introducción a la Informática',
  status: localStorage.getItem('introduccion_a_la_informatica'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'introduccion-a-la-informatica',
  parcialesLink: 'introduccion-a-la-informatica',
  finalesLink: 'introduccion-a-la-informatica',
  correlatives: [],
};

export let fisica_general_1_LTA: ISubject = {
  id: 'fisica_general_1_LTA',
  name: 'Física General I',
  status: localStorage.getItem('fisica_general_1_LTA'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'fisica-general-i-lta',
  parcialesLink: 'fisica-general-i-lta',
  finalesLink: 'fisica-general-i-lta',
  correlatives: [],
};

export let geometria_y_algebra_lineal_LTA: ISubject = {
  id: 'geometria_y_algebra_lineal_LTA',
  name: 'Geometría y Álgebra Lineal',
  status: localStorage.getItem('geometria_y_algebra_lineal_LTA'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'geometria-y-algebra-lineal-lta',
  parcialesLink: 'geometria-y-algebra-lineal-lta',
  finalesLink: 'geometria-y-algebra-lineal-lta',
  correlatives: [],
};

export let quimica_organica_y_biologica_LTA: ISubject = {
  id: 'quimica_organica_y_biologica_LTA',
  name: 'Química Orgánica y Biológica',
  status: localStorage.getItem('quimica_organica_y_biologica_LTA'),
  career: LTA_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'quimica-organica-y-biologica-lta',
  parcialesLink: 'quimica-organica-y-biologica-lta',
  finalesLink: 'quimica-organica-y-biologica-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: quimica_general_e_inorganica,
    },
  ],
};

export let fisica_general_2_LTA: ISubject = {
  id: 'fisica_general_2_LTA',
  name: 'Física General II',
  status: localStorage.getItem('fisica_general_2_LTA'),
  career: LTA_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'fisica-general-ii-lta',
  parcialesLink: 'fisica-general-ii-lta',
  finalesLink: 'fisica-general-ii-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: fisica_general_1_LTA,
    },
  ],
};

export let analisis_matematico_2_LTA: ISubject = {
  id: 'analisis_matematico_2_LTA',
  name: 'Análisis Matemático II',
  status: localStorage.getItem('analisis_matematico_2_LTA'),
  career: LTA_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'analisis-matematico-ii-lta',
  parcialesLink: 'analisis-matematico-ii-lta',
  finalesLink: 'analisis-matematico-ii-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_1_LTA,
    },
  ],
};

export let biologia_LTA: ISubject = {
  id: 'biologia_LTA',
  name: 'Biología',
  status: localStorage.getItem('biologia_LTA'),
  career: LTA_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'biologia-lta',
  parcialesLink: 'biologia-lta',
  finalesLink: 'biologia-lta',
  correlatives: [],
};

export let fundamentos_de_ecologia: ISubject = {
  id: 'fundamentos_de_ecologia',
  name: 'Fundamentos de Ecología',
  status: localStorage.getItem('fundamentos_de_ecologia'),
  career: LTA_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'fundamentos-de-ecologia',
  parcialesLink: 'fundamentos-de-ecologia',
  finalesLink: 'fundamentos-de-ecologia',
  correlatives: [],
};

export let quimica_ambiental_LTA: ISubject = {
  id: 'quimica_ambiental_LTA',
  name: 'Química Ambiental',
  status: localStorage.getItem('quimica_ambiental_LTA'),
  career: LTA_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'quimica-ambiental-lta',
  parcialesLink: 'quimica-ambiental-lta',
  finalesLink: 'quimica-ambiental-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: quimica_organica_y_biologica_LTA,
    },
  ],
};

export let calculo_numerico_LTA: ISubject = {
  id: 'calculo_numerico_LTA',
  name: 'Cálculo Ambiental',
  status: localStorage.getItem('calculo_numerico_LTA'),
  career: LTA_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'calculo-numerico-lta',
  parcialesLink: 'calculo-numerico-lta',
  finalesLink: 'calculo-numerico-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: geometria_y_algebra_lineal_LTA,
    },
  ],
};

export let ciencias_de_la_tierra_1: ISubject = {
  id: 'ciencias_de_la_tierra_1',
  name: 'Ciencias de la Tierra I',
  status: localStorage.getItem('ciencias_de_la_tierra_1'),
  career: LTA_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'ciencias-de-la-tierra-i',
  parcialesLink: 'ciencias-de-la-tierra-i',
  finalesLink: 'ciencias-de-la-tierra-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: fisica_general_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
  ],
};

export let mecanica_de_fluidos: ISubject = {
  id: 'mecanica_de_fluidos',
  name: 'Mecánica de Fluidos',
  status: localStorage.getItem('mecanica_de_fluidos'),
  career: LTA_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'mecanica-de-fluidos',
  parcialesLink: 'mecanica-de-fluidos',
  finalesLink: 'mecanica-de-fluidos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: fisica_general_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
  ],
};

export let legislacion_ambiental_LTA: ISubject = {
  id: 'legislacion_ambiental_LTA',
  name: 'Legislación Ambiental',
  status: localStorage.getItem('legislacion_ambiental_LTA'),
  career: LTA_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'legislacion-ambiental-lta',
  parcialesLink: 'legislacion-ambiental-lta',
  finalesLink: 'legislacion-ambiental-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
  ],
};

export let economia_ambiental_LTA: ISubject = {
  id: 'economia_ambiental_LTA',
  name: 'Economía Ambiental',
  status: localStorage.getItem('economia_ambiental_LTA'),
  career: LTA_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'economia-ambiental-lta',
  parcialesLink: 'economia-ambiental-lta',
  finalesLink: 'economia-ambiental-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
  ],
};

export let probabilidades_y_estadistica_LTA: ISubject = {
  id: 'probabilidades_y_estadistica_LTA',
  name: 'Probabilidades y Estadística',
  status: localStorage.getItem('probabilidades_y_estadistica_LTA'),
  career: LTA_NAME,
  year: THIRD_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'probabilidades-y-estadistica-lta',
  parcialesLink: 'probabilidades-y-estadistica-lta',
  finalesLink: 'probabilidades-y-estadistica-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: geometria_y_algebra_lineal_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
  ],
};

export let residuos_solidos: ISubject = {
  id: 'residuos_solidos',
  name: 'Residuos Sólidos',
  status: localStorage.getItem('residuos_solidos'),
  career: LTA_NAME,
  year: THIRD_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'residuos-solidos',
  parcialesLink: 'residuos-solidos',
  finalesLink: 'residuos-solidos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_1_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: geometria_y_algebra_lineal_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
  ],
};

export let contaminacion_atmosferica: ISubject = {
  id: 'contaminacion_atmosferica',
  name: 'Contaminación Atmosférica',
  status: localStorage.getItem('contaminacion_atmosferica'),
  career: LTA_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'contaminacion-atmosferica',
  parcialesLink: 'contaminacion-atmosferica',
  finalesLink: 'contaminacion-atmosferica',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: geometria_y_algebra_lineal_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
  ],
};

export let contaminacion_en_agua: ISubject = {
  id: 'contaminacion_en_agua',
  name: 'Contaminación en Agua',
  status: localStorage.getItem('contaminacion_en_agua'),
  career: LTA_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'contaminacion-en-agua',
  parcialesLink: 'contaminacion-en-agua',
  finalesLink: 'contaminacion-en-agua',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: geometria_y_algebra_lineal_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
  ],
};

export let formulacion_y_evaluacion_de_proyectos_LTA: ISubject = {
  id: 'formulacion_y_evaluacion_de_proyectos_LTA',
  name: 'Formulación y Evaluación de Proyectos',
  status: localStorage.getItem('formulacion_y_evaluacion_de_proyectos_LTA'),
  career: LTA_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'formulacion-y-evaluacion-de-proyectos-lta',
  parcialesLink: 'formulacion-y-evaluacion-de-proyectos-lta',
  finalesLink: 'formulacion-y-evaluacion-de-proyectos-lta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: geometria_y_algebra_lineal_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_general_e_inorganica,
    },
  ],
};

export let ciencias_de_la_tierra_2: ISubject = {
  id: 'ciencias_de_la_tierra_2',
  name: 'Ciencias de la Tierra II',
  status: localStorage.getItem('ciencias_de_la_tierra_2'),
  career: LTA_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'ciencias-de-la-tierra-ii',
  parcialesLink: 'ciencias-de-la-tierra-ii',
  finalesLink: 'ciencias-de-la-tierra-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_organica_y_biologica_LTA,
    },
  ],
};

export let fluodinamica_ambiental: ISubject = {
  id: 'fluodinamica_ambiental',
  name: 'Fluodinámica Ambiental',
  status: localStorage.getItem('fluodinamica_ambiental'),
  career: LTA_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'fluodinamica-ambiental',
  parcialesLink: 'fluodinamica-ambiental',
  finalesLink: 'fluodinamica-ambiental',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_organica_y_biologica_LTA,
    },
  ],
};

export let radiacion: ISubject = {
  id: 'radiacion',
  name: 'Radiación',
  status: localStorage.getItem('radiacion'),
  career: LTA_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'radiacion',
  parcialesLink: 'radiacion',
  finalesLink: 'radiacion',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: tecnologia_ambiente_y_sociedad,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_informatica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general_2_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_organica_y_biologica_LTA,
    },
  ],
};

export let tratamiento_de_efluentes_gaseosos: ISubject = {
  id: 'tratamiento_de_efluentes_gaseosos',
  name: 'Tratamiento de Efluentes Gaseosos',
  status: localStorage.getItem('tratamiento_de_efluentes_gaseosos'),
  career: LTA_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'tratamiento-de-efluentes-gaseosos',
  parcialesLink: 'tratamiento-de-efluentes-gaseosos',
  finalesLink: 'tratamiento-de-efluentes-gaseosos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: contaminacion_atmosferica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: legislacion_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: economia_ambiental_LTA,
    },
  ],
};

export let tratamiento_de_efluentes_liquidos: ISubject = {
  id: 'tratamiento_de_efluentes_liquidos',
  name: 'Tratamiento de Efluentes Líquidos',
  status: localStorage.getItem('tratamiento_de_efluentes_liquidos'),
  career: LTA_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'tratamiento-de-efluentes-liquidos',
  parcialesLink: 'tratamiento-de-efluentes-liquidos',
  finalesLink: 'tratamiento-de-efluentes-liquidos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: contaminacion_en_agua,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: legislacion_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: economia_ambiental_LTA,
    },
  ],
};

export let tratamiento_de_residuos_solidos: ISubject = {
  id: 'tratamiento_de_residuos_solidos',
  name: 'Tratamiento de Residuos Sólidos',
  status: localStorage.getItem('tratamiento_de_residuos_solidos'),
  career: LTA_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'tratamiento-de-residuos-solidos',
  parcialesLink: 'tratamiento-de-residuos-solidos',
  finalesLink: 'tratamiento-de-residuos-solidos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: residuos_solidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: legislacion_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: economia_ambiental_LTA,
    },
  ],
};

export let evaluacion_de_impacto_ambiental: ISubject = {
  id: 'evaluacion_de_impacto_ambiental',
  name: 'Evaluación de Impacto Ambiental',
  status: localStorage.getItem('evaluacion_de_impacto_ambiental'),
  career: LTA_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'evaluacion-de-impacto-ambiental',
  parcialesLink: 'evaluacion-de-impacto-ambiental',
  finalesLink: 'evaluacion-de-impacto-ambiental',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: formulacion_y_evaluacion_de_proyectos_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fundamentos_de_ecologia,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: calculo_numerico_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_tierra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: mecanica_de_fluidos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: legislacion_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: economia_ambiental_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: probabilidades_y_estadistica_LTA,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: residuos_solidos,
    },
  ],
};

export let lta_subjects: ISubject[] = [
  analisis_matematico_1_LTA,
  tecnologia_ambiente_y_sociedad,
  quimica_general_e_inorganica,
  introduccion_a_la_informatica,
  fisica_general_1_LTA,
  geometria_y_algebra_lineal_LTA,
  quimica_organica_y_biologica_LTA,
  fisica_general_2_LTA,
  analisis_matematico_2_LTA,
  biologia_LTA,
  fundamentos_de_ecologia,
  quimica_ambiental_LTA,
  calculo_numerico_LTA,
  ciencias_de_la_tierra_1,
  mecanica_de_fluidos,
  legislacion_ambiental_LTA,
  economia_ambiental_LTA,
  probabilidades_y_estadistica_LTA,
  residuos_solidos,
  contaminacion_atmosferica,
  contaminacion_en_agua,
  formulacion_y_evaluacion_de_proyectos_LTA,
  ciencias_de_la_tierra_2,
  fluodinamica_ambiental,
  radiacion,
  tratamiento_de_efluentes_gaseosos,
  tratamiento_de_efluentes_liquidos,
  tratamiento_de_residuos_solidos,
  evaluacion_de_impacto_ambiental,
];
