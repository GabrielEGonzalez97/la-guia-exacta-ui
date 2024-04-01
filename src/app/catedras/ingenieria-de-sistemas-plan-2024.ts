import {
  CORRELATIVE_CURSADA_NAME,
  FIFTH_YEAR_NAME,
  FIRST_QUARTER_NAME,
  FIRST_YEAR_NAME,
  FOURTH_YEAR_NAME,
  INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  ISubject,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  THIRD_YEAR_NAME,
} from './interfaces';

export let ingles_plan_2024: ISubject = {
  id: 'ingles_plan_2024',
  name: 'Inglés',
  status: localStorage.getItem('ingles_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0017',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0017',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=710',
  clasesLink: '',
  resumenesLink: 'ingles',
  parcialesLink: 'ingles',
  finalesLink: 'ingles',
  correlatives: [],
};

export let introduccion_al_algebra_plan_2024: ISubject = {
  id: 'introduccion_al_algebra_plan_2024',
  name: 'Introducción al Álgebra',
  status: localStorage.getItem('introduccion_al_algebra_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0003',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0003',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=604',
  clasesLink: '',
  resumenesLink: 'algebra-i',
  parcialesLink: 'algebra-i',
  finalesLink: 'algebra-i',
  correlatives: [],
};

export let introduccion_a_la_programacion_1_plan_2024: ISubject = {
  id: 'introduccion_a_la_programacion_1_plan_2024',
  name: 'Introducción a la Programación I',
  status: localStorage.getItem('introduccion_a_la_programacion_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0005',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0005',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'introduccion-a-la-programacion-ii',
  parcialesLink: 'introduccion-a-la-programacion-ii',
  finalesLink: 'introduccion-a-la-programacion-ii',
  correlatives: [],
};

export let introduccion_a_los_sistemas_informaticos_plan_2024: ISubject = {
  id: 'introduccion_a_los_sistemas_informaticos_plan_2024',
  name: 'Introducción a los sistemas informáticos',
  status: localStorage.getItem(
    'introduccion_a_los_sistemas_informaticos_plan_2024'
  ),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=1024',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=1024',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=593',
  clasesLink: '',
  resumenesLink: 'introduccion-a-la-arquitectura-de-sistemas',
  parcialesLink: 'introduccion-a-la-arquitectura-de-sistemas',
  finalesLink: 'introduccion-a-la-arquitectura-de-sistemas',
  correlatives: [],
};

export let calculo_1_plan_2024: ISubject = {
  id: 'calculo_1_plan_2024',
  name: 'Cálculo I',
  status: localStorage.getItem('calculo_1_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0500',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0500',
  webLink: 'https://analisis-matematico-i.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=712',
  clasesLink: '',
  resumenesLink: 'analisis-matematico-i',
  parcialesLink: 'analisis-matematico-i',
  finalesLink: 'analisis-matematico-i',
  correlatives: [],
};

export let disenio_logico_plan_2024: ISubject = {
  id: 'disenio_logico_plan_2024',
  name: 'Diseño Lógico',
  status: localStorage.getItem('disenio_logico_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0016',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0016',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=747',
  clasesLink: '',
  resumenesLink: 'electronica-digital',
  parcialesLink: 'electronica-digital',
  finalesLink: 'electronica-digital',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0005',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0005',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=780',
  clasesLink: '',
  resumenesLink: 'introduccion-a-la-programacion-ii',
  parcialesLink: 'introduccion-a-la-programacion-ii',
  finalesLink: 'introduccion-a-la-programacion-ii',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0004',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0004',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'ciencias-de-la-computacion-i',
  parcialesLink: 'ciencias-de-la-computacion-i',
  finalesLink: 'ciencias-de-la-computacion-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_al_algebra_plan_2024,
    },
  ],
};

export let algebra_lineal_plan_2024: ISubject = {
  id: 'algebra_lineal_plan_2024',
  name: 'Álgebra Lineal',
  status: localStorage.getItem('algebra_lineal_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0125',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0125',
  webLink: 'http://algebra-lineal.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=761',
  clasesLink: '',
  resumenesLink: 'algebra-lineal',
  parcialesLink: 'algebra-lineal',
  finalesLink: 'algebra-lineal',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0009',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0009',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=740',
  clasesLink: '',
  resumenesLink: 'analisis-y-disenio-de-algoritmos-i',
  parcialesLink: 'analisis-y-disenio-de-algoritmos-i',
  finalesLink: 'analisis-y-disenio-de-algoritmos-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0021',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0021',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=610',
  clasesLink: '',
  resumenesLink: 'arquitectura-de-computadoras-i',
  parcialesLink: 'arquitectura-de-computadoras-i',
  finalesLink: 'arquitectura-de-computadoras-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0022',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0022',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'programacion-orientada-a-objetos',
  parcialesLink: 'programacion-orientada-a-objetos',
  finalesLink: 'programacion-orientada-a-objetos',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0013',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0013',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=766',
  clasesLink: '',
  resumenesLink: 'analisis-y-disenio-de-algoritmos-ii',
  parcialesLink: 'analisis-y-disenio-de-algoritmos-ii',
  finalesLink: 'analisis-y-disenio-de-algoritmos-ii',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0504',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0504',
  webLink: 'http://analisis-matematico-ii.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=664',
  clasesLink: '',
  resumenesLink: 'analisis-matematico-ii',
  parcialesLink: 'analisis-matematico-ii',
  finalesLink: 'analisis-matematico-ii',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0020',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0020',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=599',
  clasesLink: '',
  resumenesLink: 'metodologias-de-desarrollo-de-software-i',
  parcialesLink: 'metodologias-de-desarrollo-de-software-i',
  finalesLink: 'metodologias-de-desarrollo-de-software-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: SECOND_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0014',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0014',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=771',
  clasesLink: '',
  resumenesLink: 'comunicacion-de-datos-i',
  parcialesLink: 'comunicacion-de-datos-i',
  finalesLink: 'comunicacion-de-datos-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0019',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0019',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=637',
  clasesLink: '',
  resumenesLink: 'estructuras-de-almacenamiento-de-datos',
  parcialesLink: 'estructuras-de-almacenamiento-de-datos',
  finalesLink: 'estructuras-de-almacenamiento-de-datos',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0007',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0007',
  webLink: 'https://fisica-general.alumnos.exa.unicen.edu.ar/home',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=749',
  clasesLink: '',
  resumenesLink: 'fisica-general',
  parcialesLink: 'fisica-general',
  finalesLink: 'fisica-general',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0024',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0024',
  webLink: 'https://lengprg1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=562',
  clasesLink: '',
  resumenesLink: 'lenguajes-de-programacion-i',
  parcialesLink: 'lenguajes-de-programacion-i',
  finalesLink: 'lenguajes-de-programacion-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0025',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0025',
  webLink: 'https://users.exa.unicen.edu.ar/catedras/sisop1/',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'sistemas-operativos-i',
  parcialesLink: 'sistemas-operativos-i',
  finalesLink: 'sistemas-operativos-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0023',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0023',
  webLink: 'https://bdatos1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=721',
  clasesLink: '',
  resumenesLink: 'bases-de-datos-i',
  parcialesLink: 'bases-de-datos-i',
  finalesLink: 'bases-de-datos-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'ingenieria-de-software-i',
  parcialesLink: 'ingenieria-de-software-i',
  finalesLink: 'ingenieria-de-software-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0015',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0015',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=704',
  clasesLink: '',
  resumenesLink: 'probabilidades-y-estadistica',
  parcialesLink: 'probabilidades-y-estadistica',
  finalesLink: 'probabilidades-y-estadistica',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: THIRD_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'programacion-web',
  parcialesLink: 'programacion-web',
  finalesLink: 'programacion-web',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0012',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0012',
  webLink:
    'https://drive.google.com/drive/folders/1IpRsJmRVRwEgmuy9b4ktLdegFyrv2KCd',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=657',
  clasesLink: '',
  resumenesLink: 'electricidad-y-magnetismo',
  parcialesLink: 'electricidad-y-magnetismo',
  finalesLink: 'electricidad-y-magnetismo',
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
  name: 'Organización y Gestión Empresarial',
  status: localStorage.getItem('organizacion_empresarial_plan_2024'),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=1188',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=1188',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=616',
  clasesLink: '',
  resumenesLink: 'organizacion-empresarial',
  parcialesLink: 'organizacion-empresarial',
  finalesLink: 'organizacion-empresarial',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0029',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0029',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=669',
  clasesLink: '',
  resumenesLink: 'comunicacion-de-datos-ii',
  parcialesLink: 'comunicacion-de-datos-ii',
  finalesLink: 'comunicacion-de-datos-ii',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0028',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0028',
  webLink: 'https://teoinfo.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=643',
  clasesLink: '',
  resumenesLink: 'teoria-de-la-informacion',
  parcialesLink: 'teoria-de-la-informacion',
  finalesLink: 'teoria-de-la-informacion',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0027',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0027',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=611',
  clasesLink: '',
  resumenesLink: 'arquitectura-de-computadoras-y-tecnicas-digitales',
  parcialesLink: 'arquitectura-de-computadoras-y-tecnicas-digitales',
  finalesLink: 'arquitectura-de-computadoras-y-tecnicas-digitales',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'calidad-de-software',
  parcialesLink: 'calidad-de-software',
  finalesLink: 'calidad-de-software',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0032',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0032',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=778',
  clasesLink: '',
  resumenesLink: 'disenio-de-compiladores-i',
  parcialesLink: 'disenio-de-compiladores-i',
  finalesLink: 'disenio-de-compiladores-i',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FOURTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'fundamentos-de-la-ciencia-de-datos',
  parcialesLink: 'fundamentos-de-la-ciencia-de-datos',
  finalesLink: 'fundamentos-de-la-ciencia-de-datos',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'ciberseguridad',
  parcialesLink: 'ciberseguridad',
  finalesLink: 'ciberseguridad',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'ingenieria-de-software-ii',
  parcialesLink: 'ingenieria-de-software-ii',
  finalesLink: 'ingenieria-de-software-ii',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'inteligencia-artificial',
  parcialesLink: 'inteligencia-artificial',
  finalesLink: 'inteligencia-artificial',
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

export let etica_y_legislacion_de_la_practica_profesional_plan_2024: ISubject = {
  id: 'etica_y_legislacion_de_la_practica_profesional_plan_2024',
  name: 'Ética y Legislación de la práctica profesional',
  status: localStorage.getItem(
    'etica_y_legislacion_de_la_practica_profesional_plan_2024'
  ),
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=1190',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=1190',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=626',
  clasesLink: '',
  resumenesLink: 'legislacion-y-gestion-ambiental',
  parcialesLink: 'legislacion-y-gestion-ambiental',
  finalesLink: 'legislacion-y-gestion-ambiental',
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
  career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
  year: FIFTH_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  modalidadLink: '',
  programaLink: '',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: 'fundamentos-de-economia-y-proyectos-de-inversion',
  parcialesLink: 'fundamentos-de-economia-y-proyectos-de-inversion',
  finalesLink: 'fundamentos-de-economia-y-proyectos-de-inversion',
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
    career: INGENIERIA_DE_SISTEMAS_PLAN_2024_NAME,
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
