import { ListItem } from 'carbon-components-angular';
import {
  CORRELATIVE_CURSADA_NAME,
  CORRELATIVE_FINAL_NAME,
  FIRST_QUARTER_NAME,
  INGENIERIA_DE_SISTEMAS_NAME,
  ISubject,
  SECOND_QUARTER_NAME,
  TUDAI_NAME,
} from './interfaces';

export const CAREERS_DROPDOWN_ITEMS: ListItem[] = [
  {
    content: 'Todas',
    value: 'Todas',
    selected: true,
  },
  {
    content: INGENIERIA_DE_SISTEMAS_NAME,
    value: INGENIERIA_DE_SISTEMAS_NAME,
    selected: false,
  },
  { content: TUDAI_NAME, value: TUDAI_NAME, selected: false },
];

export const QUARTERS_DROPDOWN_ITEMS: ListItem[] = [
  {
    content: 'Todos',
    value: 'Todos',
    selected: true,
  },
  {
    content: FIRST_QUARTER_NAME,
    value: FIRST_QUARTER_NAME,
    selected: false,
  },
  { content: SECOND_QUARTER_NAME, value: SECOND_QUARTER_NAME, selected: false },
];

export let algebra_1: ISubject = {
  id: 'algebra_1',
  name: 'Álgebra I',
  status: localStorage.getItem('algebra_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Velazquez, Maria Ester',
  contactEmail: 'mary.velazquez2011@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0003',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0003',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=604',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'algebra-i',
  correlatives: [],
};

export let algebra_1_recursada: ISubject = {
  id: 'algebra_1_recursada',
  name: 'Álgebra I (Recursada)',
  status: localStorage.getItem('algebra_1_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Morelli, Graciela',
  contactEmail: 'morelligracielaangelica@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0003',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0003',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'algebra-i',
  correlatives: [],
};

export let analisis_matematico_1: ISubject = {
  id: 'analisis_matematico_1',
  name: 'Análisis Matemático I',
  status: localStorage.getItem('analisis_matematico_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Madrid, Ana Paula',
  contactEmail: 'apmadrid@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0500',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0500',
  webLink: 'https://analisis-matematico-i.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=712',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'analisis-matematico-i',
  correlatives: [],
};

export let analisis_matematico_1_recursada: ISubject = {
  id: 'analisis_matematico_1_recursada',
  name: 'Análisis Matemático I (Recursada)',
  status: localStorage.getItem('analisis_matematico_1_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Maestri, Maria Laura',
  contactEmail: 'marialauramaestri@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0500',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0500',
  webLink: 'https://analisis-matematico-i.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/view.php?id=712',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'analisis-matematico-i',
  correlatives: [],
};

export let introduccion_a_la_programacion_1: ISubject = {
  id: 'introduccion_a_la_programacion_1',
  name: 'Introducción a la Programación I',
  status: localStorage.getItem('introduccion_a_la_programacion_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Cobo, Hernan',
  contactEmail: 'hernanjcobo@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0001',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0001',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=737',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'introduccion-a-la-programacion-i',
  correlatives: [],
};

export let introduccion_a_la_programacion_1_recursada: ISubject = {
  id: 'introduccion_a_la_programacion_1_recursada',
  name: 'Introducción a la Programación I (Recursada)',
  status: localStorage.getItem('introduccion_a_la_programacion_1_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Leonardi, Carmen',
  contactEmail: '',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0001',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0001',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'introduccion-a-la-programacion-i',
  correlatives: [],
};

export let quimica: ISubject = {
  id: 'quimica',
  name: 'Química',
  status: localStorage.getItem('quimica'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
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
  finalesLink: 'quimica',
  correlatives: [],
};

export let algebra_lineal: ISubject = {
  id: 'algebra_lineal',
  name: 'Álgebra Lineal',
  status: localStorage.getItem('algebra_lineal'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Calomino, Ismael',
  contactEmail: 'ismaelcalomino@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0125',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0125',
  webLink: 'http://algebra-lineal.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=761',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'algebra-lineal',
  correlatives: [
    { typeOfCorrelativity: CORRELATIVE_CURSADA_NAME, subject: algebra_1 },
  ],
};

export let algebra_lineal_recursada: ISubject = {
  id: 'algebra_lineal_recursada',
  name: 'Álgebra Lineal (Recursada)',
  status: localStorage.getItem('algebra_lineal_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Nagy, Agustin',
  contactEmail: 'agustin.nagy@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0125',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0125',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'algebra-lineal',
  correlatives: [
    { typeOfCorrelativity: CORRELATIVE_CURSADA_NAME, subject: algebra_1 },
  ],
};

export let ciencias_de_la_computacion_1: ISubject = {
  id: 'ciencias_de_la_computacion_1',
  name: 'Ciencias de la Computación I',
  status: localStorage.getItem('ciencias_de_la_computacion_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Mauco, Maria Virginia',
  contactEmail: 'virginiamauco@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0004',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0004',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=739',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'ciencias-de-la-computacion-i',
  correlatives: [],
};

export let ciencias_de_la_computacion_1_recursada: ISubject = {
  id: 'ciencias_de_la_computacion_1_recursada',
  name: 'Ciencias de la Computación I (Recursada)',
  status: localStorage.getItem('ciencias_de_la_computacion_1_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Mauco, Maria Virginia',
  contactEmail: 'virginiamauco@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0004',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0004',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'ciencias-de-la-computacion-i',
  correlatives: [],
};

export let fisica_general: ISubject = {
  id: 'fisica_general',
  name: 'Física General',
  status: localStorage.getItem('fisica_general'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Tognana, Sebastian',
  contactEmail: 'stognana@exa.unicen.edu.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0007',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0007',
  webLink: 'https://fisica-general.alumnos.exa.unicen.edu.ar/home',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=749',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'fisica-general',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_1,
    },
  ],
};

export let fisica_general_recursada: ISubject = {
  id: 'fisica_general_recursada',
  name: 'Física General (Recursada)',
  status: localStorage.getItem('fisica_general_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Morando, Carina',
  contactEmail: 'carinamorando@yahoo.com.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0007',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0007',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'fisica_general',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_1,
    },
  ],
};

export let introduccion_a_la_programacion_2: ISubject = {
  id: 'introduccion_a_la_programacion_2',
  name: 'Introducción a la Programación II',
  status: localStorage.getItem('introduccion_a_la_programacion_2'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Cobo, Hernan',
  contactEmail: 'hcobo@rec.unicen.edu.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0005',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0005',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=780',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'introduccion-a-la-programacion-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_1,
    },
  ],
};

export let introduccion_a_la_programacion_2_recursada: ISubject = {
  id: 'introduccion_a_la_programacion_2_recursada',
  name: 'Introducción a la Programación II (Recursada)',
  status: localStorage.getItem('introduccion_a_la_programacion_2_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Boroni, Gustavo Adolfo',
  contactEmail: 'gboroni@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0005',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0005',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'introduccion-a-la-programacion-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_1,
    },
  ],
};

export let matematica_discreta: ISubject = {
  id: 'matematica_discreta',
  name: 'Matemática Discreta',
  status: localStorage.getItem('matematica_discreta'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Velazquez, Maria Ester',
  contactEmail: 'mary.velazquez2011@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0127',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0127',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=718',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'matematica-discreta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: algebra_1,
    },
  ],
};

export let matematica_discreta_recursada: ISubject = {
  id: 'matematica_discreta_recursada',
  name: 'Matemática Discreta (Recursada)',
  status: localStorage.getItem('matematica_discreta_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Bigeon, Juan Jose',
  contactEmail: 'jbigeon@exa.unicen.edu.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0127',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0127',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'matematica-discreta',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: algebra_1,
    },
  ],
};

export let analisis_matematico_2: ISubject = {
  id: 'analisis_matematico_2',
  name: 'Análisis Matemático II',
  status: localStorage.getItem('analisis_matematico_2'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Galotto, Maria Jose',
  contactEmail: 'mariajogalotto@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0504',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0504',
  webLink: 'http://analisis-matematico-ii.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=664',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'analisis-matematico-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_1,
    },
  ],
};

export let analisis_matematico_2_recursada: ISubject = {
  id: 'analisis_matematico_2_recursada',
  name: 'Análisis Matemático II (Recursada)',
  status: localStorage.getItem('analisis_matematico_2_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
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
  finalesLink: 'analisis-matematico-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_1,
    },
  ],
};

export let analisis_y_diseño_de_algoritmos_1: ISubject = {
  id: 'analisis_y_diseño_de_algoritmos_1',
  name: 'Análisis y Diseño de Algoritmos I',
  status: localStorage.getItem('analisis_y_diseño_de_algoritmos_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Favre, Liliana Maria',
  contactEmail: 'liliana.favre@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0009',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0009',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=740',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'analisis-y-diseño-de-algoritmos-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: matematica_discreta,
    },
  ],
};

export let ciencias_de_la_computacion_2: ISubject = {
  id: 'ciencias_de_la_computacion_2',
  name: 'Ciencias de la Computación II',
  status: localStorage.getItem('ciencias_de_la_computacion_2'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Mauco, Maria Virginia',
  contactEmail: 'virginiamauco@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0008',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0008',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=644',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'ciencias-de-la-computacion-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: matematica_discreta,
    },
  ],
};

export let ciencias_de_la_computacion_2_recursada: ISubject = {
  id: 'ciencias_de_la_computacion_2_recursada',
  name: 'Ciencias de la Computación II (Recursada)',
  status: localStorage.getItem('ciencias_de_la_computacion_2_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Schiaffino, Silvia Noemi',
  contactEmail: 'silvia.schiaffino@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0008',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0008',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'ciencias-de-la-computacion-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: matematica_discreta,
    },
  ],
};

export let electricidad_y_magnetismo: ISubject = {
  id: 'electricidad_y_magnetismo',
  name: 'Electricidad y Magnetismo',
  status: localStorage.getItem('electricidad_y_magnetismo'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Irurzun, Alicia',
  contactEmail: 'imalicia@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0012',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0012',
  webLink:
    'https://drive.google.com/drive/folders/1IpRsJmRVRwEgmuy9b4ktLdegFyrv2KCd',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=657',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'electricidad-y-magnetismo',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: fisica_general,
    },
  ],
};

export let introduccion_a_la_arquitectura_de_sistemas: ISubject = {
  id: 'introduccion_a_la_arquitectura_de_sistemas',
  name: 'Introducción a la Arquitectura de Sistemas',
  status: localStorage.getItem('introduccion_a_la_arquitectura_de_sistemas'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Curti, Hugo Javier',
  contactEmail: 'hcurti@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=1024',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=1024',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=593',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'introduccion-a-la-arquitectura-de-sistemas',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_programacion_2,
    },
  ],
};

export let analisis_y_diseño_de_algoritmos_2: ISubject = {
  id: 'analisis_y_diseño_de_algoritmos_2',
  name: 'Análisis y Diseño de Algoritmos II',
  status: localStorage.getItem('analisis_y_diseño_de_algoritmos_2'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Favre, Liliana Maria',
  contactEmail: 'liliana.favre@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0013',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0013',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=766',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'analisis-y-diseño-de-algoritmos-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_computacion_2,
    },
  ],
};

export let analisis_y_diseño_de_algoritmos_2_recursada: ISubject = {
  id: 'analisis_y_diseño_de_algoritmos_2_recursada',
  name: 'Análisis y Diseño de Algoritmos II (Recursada)',
  status: localStorage.getItem('analisis_y_diseño_de_algoritmos_2_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Cifuentes, Maria Virginia',
  contactEmail: 'mvcifuentes@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0013',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0013',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'analisis-y-diseño-de-algoritmos-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: ciencias_de_la_computacion_2,
    },
  ],
};

export let comunicacion_de_datos_1: ISubject = {
  id: 'comunicacion_de_datos_1',
  name: 'Comunicación de Datos I',
  status: localStorage.getItem('comunicacion_de_datos_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Mayorano, Fernando',
  contactEmail: 'fermayorano@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0014',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0014',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=771',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'comunicacion-de-datos-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_arquitectura_de_sistemas,
    },
  ],
};

export let electronica_digital: ISubject = {
  id: 'electronica_digital',
  name: 'Electrónica Digital',
  status: localStorage.getItem('electronica_digital'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Wainschenker, Ruben',
  contactEmail: 'ruben.wain@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0016',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0016',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=747',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'electronica-digital',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: electricidad_y_magnetismo,
    },
  ],
};

export let ingles: ISubject = {
  id: 'ingles',
  name: 'Inglés',
  status: localStorage.getItem('ingles'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Batrandiaran, Carolina',
  contactEmail: '',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0017',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0017',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=710',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'ingles',
  correlatives: [],
};

export let probabilidades_y_estadistica: ISubject = {
  id: 'probabilidades_y_estadistica',
  name: 'Probabilidades y Estadística',
  status: localStorage.getItem('probabilidades_y_estadistica'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Marinelli, Claudia Beatriz',
  contactEmail: 'marinelli.claudia@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0015',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0015',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=704',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'probabilidades-y-estadistica',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_2,
    },
  ],
};

export let arquitectura_de_computadoras_1: ISubject = {
  id: 'arquitectura_de_computadoras_1',
  name: 'Arquitectura de Computadoras I',
  status: localStorage.getItem('arquitectura_de_computadoras_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Tosini, Marcelo',
  contactEmail: 'marcelo.tosini@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0021',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0021',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=610',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'arquitectura-de-computadoras-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: introduccion_a_la_arquitectura_de_sistemas,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: electronica_digital,
    },
  ],
};

export let estructuras_de_almacenamiento_de_datos: ISubject = {
  id: 'estructuras_de_almacenamiento_de_datos',
  name: 'Estructuras de Almacenamiento de Datos',
  status: localStorage.getItem('estructuras_de_almacenamiento_de_datos'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Rinaldi, Pablo Rafael',
  contactEmail: 'rinaldipablo@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0019',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0019',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=637',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'estructuras-de-almacenamiento-de-datos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: probabilidades_y_estadistica,
    },
  ],
};

export let metodologias_de_desarrollo_de_software_1: ISubject = {
  id: 'metodologias_de_desarrollo_de_software_1',
  name: 'Metodologías de Desarrollo de Software I',
  status: localStorage.getItem('metodologias_de_desarrollo_de_software_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Marcos, Claudia Andrea',
  contactEmail: 'cmarcos@exa.unicen.edu.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0020',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0020',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=599',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'metodologias-de-desarrollo-de-software-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_2,
    },
  ],
};

export let programacion_orientada_a_objetos: ISubject = {
  id: 'programacion_orientada_a_objetos',
  name: 'Programación Orientada a Objetos',
  status: localStorage.getItem('programacion_orientada_a_objetos'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Berdun, Luis Sebastian',
  contactEmail: 'lberdun@exa.unicen.edu.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0022',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0022',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'programacion-orientada-a-objetos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_2,
    },
  ],
};

export let programacion_orientada_a_objetos_recursada: ISubject = {
  id: 'programacion_orientada_a_objetos_recursada',
  name: 'Programación Orientada a Objetos (Recursada)',
  status: localStorage.getItem('programacion_orientada_a_objetos_recursada'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Teyseyre, Alfredo',
  contactEmail: 'alfredo.teyseyre@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0022',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0022',
  webLink: '',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'programacion-orientada-a-objetos',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_2,
    },
  ],
};

export let bases_de_datos_1: ISubject = {
  id: 'bases_de_datos_1',
  name: 'Bases de Datos I',
  status: localStorage.getItem('bases_de_datos_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Del Fresno, Mirta Mariana',
  contactEmail: 'mdelfres@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0023',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0023',
  webLink: 'https://bdatos1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=721',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'bases-de-datos-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: estructuras_de_almacenamiento_de_datos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: metodologias_de_desarrollo_de_software_1,
    },
  ],
};

export let investigacion_operativa_1: ISubject = {
  id: 'investigacion_operativa_1',
  name: 'Investigación Operativa I',
  status: localStorage.getItem('investigacion_operativa_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Illescas, Roberto Gustavo',
  contactEmail: 'gustavo.illescas@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0026',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0026',
  webLink: 'http://invop.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=717',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'investigacion-operativa-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: probabilidades_y_estadistica,
    },
  ],
};

export let lenguajes_de_programacion_1: ISubject = {
  id: 'lenguajes_de_programacion_1',
  name: 'Lenguajes de Programación I',
  status: localStorage.getItem('lenguajes_de_programacion_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Massa, Jose Maria',
  contactEmail: 'josem.massa@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0024',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0024',
  webLink: 'https://lengprg1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=562',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'lenguajes-de-programacion-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: programacion_orientada_a_objetos,
    },
  ],
};

export let programacion_exploratoria: ISubject = {
  id: 'programacion_exploratoria',
  name: 'Programación Exploratoria',
  status: localStorage.getItem('programacion_exploratoria'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
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
  finalesLink: 'programacion-exploratoria',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_2,
    },
  ],
};

export let sistemas_operativos_1: ISubject = {
  id: 'sistemas_operativos_1',
  name: 'Sistemas Operativos I',
  status: localStorage.getItem('sistemas_operativos_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Zunino, Alejandro Octavio',
  contactEmail: 'azunino@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0025',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0025',
  webLink: 'https://users.exa.unicen.edu.ar/catedras/sisop1/',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'sistemas-operativos-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: arquitectura_de_computadoras_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: estructuras_de_almacenamiento_de_datos,
    },
  ],
};

export let arquitectura_de_computadoras_y_tecnicas_digitales: ISubject = {
  id: 'arquitectura_de_computadoras_y_tecnicas_digitales',
  name: 'Arquitectura de Computadoras y Técnicas Digitales',
  status: localStorage.getItem(
    'arquitectura_de_computadoras_y_tecnicas_digitales'
  ),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Tosini, Marcelo',
  contactEmail: 'marcelo.tosini@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0027',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0027',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=611',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'arquitectura-de-computadoras-y-tecnicas-digitales',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: arquitectura_de_computadoras_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: matematica_discreta,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
  ],
};

export let comunicacion_de_datos_2: ISubject = {
  id: 'comunicacion_de_datos_2',
  name: 'Comunicación de Datos II',
  status: localStorage.getItem('comunicacion_de_datos_2'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Rubiales, Aldo Jose',
  contactEmail: 'aldorubiales@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0029',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0029',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=669',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'comunicacion-de-datos-ii',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: comunicacion_de_datos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: sistemas_operativos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: matematica_discreta,
    },
  ],
};

export let introduccion_al_calculo_diferencial_e_integral: ISubject = {
  id: 'introduccion_al_calculo_diferencial_e_integral',
  name: 'Introducción al Cálculo Diferencial e Integral',
  status: localStorage.getItem(
    'introduccion_al_calculo_diferencial_e_integral'
  ),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Marinelli, Claudia Beatriz',
  contactEmail: 'marinelli.claudia@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0030',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0030',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=615',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'introduccion-al-calculo-diferencial-e-integral',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_matematico_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: matematica_discreta,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
  ],
};

export let organizacion_empresarial: ISubject = {
  id: 'organizacion_empresarial',
  name: 'Organización Empresarial',
  status: localStorage.getItem('organizacion_empresarial'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Illescas, Roberto Gustavo',
  contactEmail: 'gustavo.illescas@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=1188',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=1188',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=616',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'organizacion-empresarial',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: bases_de_datos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: investigacion_operativa_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: lenguajes_de_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: programacion_exploratoria,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: sistemas_operativos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: matematica_discreta,
    },
  ],
};

export let teoria_de_la_informacion: ISubject = {
  id: 'teoria_de_la_informacion',
  name: 'Teoría de la Información',
  status: localStorage.getItem('teoria_de_la_informacion'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Del Fresno, Mirta Mariana',
  contactEmail: 'mdelfres@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0028',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0028',
  webLink: 'https://teoinfo.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=643',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'teoria-de-la-informacion',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: analisis_y_diseño_de_algoritmos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: comunicacion_de_datos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: probabilidades_y_estadistica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: fisica_general,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_programacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: matematica_discreta,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
  ],
};

export let diseño_de_compiladores_1: ISubject = {
  id: 'diseño_de_compiladores_1',
  name: 'Diseño de Compiladores I',
  status: localStorage.getItem('diseño_de_compiladores_1'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Ridao, Marcela Natividad',
  contactEmail: 'marceridao@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0032',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0032',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=778',
  clasesLink: 'diseño-de-compiladores-i',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'diseño-de-compiladores-i',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: lenguajes_de_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_y_diseño_de_algoritmos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: electricidad_y_magnetismo,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_arquitectura_de_sistemas,
    },
  ],
};

export let diseño_de_sistemas_de_software: ISubject = {
  id: 'diseño_de_sistemas_de_software',
  name: 'Diseño de Sistemas de Software',
  status: localStorage.getItem('diseño_de_sistemas_de_software'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
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
  finalesLink: 'diseño-de-sistemas-de-software',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: bases_de_datos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: programacion_orientada_a_objetos,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: sistemas_operativos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_y_diseño_de_algoritmos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: electricidad_y_magnetismo,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_arquitectura_de_sistemas,
    },
  ],
};

export let fundamentos_de_economia_y_proyectos_de_inversion: ISubject = {
  id: 'fundamentos_de_economia_y_proyectos_de_inversion',
  name: 'Fundamentos de Economía y Proyectos de Inversión',
  status: localStorage.getItem(
    'fundamentos_de_economia_y_proyectos_de_inversion'
  ),
  career: INGENIERIA_DE_SISTEMAS_NAME,
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
  finalesLink: 'fundamentos-de-economia-y-proyectos-de-inversion',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: bases_de_datos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: investigacion_operativa_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: lenguajes_de_programacion_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: programacion_exploratoria,
    },
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: sistemas_operativos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: algebra_lineal,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_matematico_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_y_diseño_de_algoritmos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ciencias_de_la_computacion_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: electricidad_y_magnetismo,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: introduccion_a_la_arquitectura_de_sistemas,
    },
  ],
};

export let ingenieria_de_software: ISubject = {
  id: 'ingenieria_de_software',
  name: 'Ingeniería de Software',
  status: localStorage.getItem('ingenieria_de_software'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
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
  finalesLink: 'ingenieria-de-software',
  correlatives: [
    {
      typeOfCorrelativity: CORRELATIVE_CURSADA_NAME,
      subject: diseño_de_sistemas_de_software,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: analisis_y_diseño_de_algoritmos_2,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: comunicacion_de_datos_1,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: electronica_digital,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: probabilidades_y_estadistica,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: ingles,
    },
    {
      typeOfCorrelativity: CORRELATIVE_FINAL_NAME,
      subject: quimica,
    },
  ],
};

export let legislacion_y_gestion_ambiental: ISubject = {
  id: 'legislacion_y_gestion_ambiental',
  name: 'Legislación y Gestión Ambiental',
  status: localStorage.getItem('legislacion_y_gestion_ambiental'),
  career: INGENIERIA_DE_SISTEMAS_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Mauhourat, Ricardo',
  contactEmail: 'ricardo.mauhourat@mauhourat.com.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=1190',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=1190',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=626',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: 'legislacion-y-gestion-ambiental',
  correlatives: [],
};

export let SUBJECTS: ISubject[] = [
  algebra_1,
  algebra_1_recursada,
  algebra_lineal,
  algebra_lineal_recursada,
  analisis_matematico_1,
  analisis_matematico_1_recursada,
  analisis_matematico_2,
  analisis_matematico_2_recursada,
  analisis_y_diseño_de_algoritmos_1,
  analisis_y_diseño_de_algoritmos_2,
  analisis_y_diseño_de_algoritmos_2_recursada,
  arquitectura_de_computadoras_1,
  arquitectura_de_computadoras_y_tecnicas_digitales,
  bases_de_datos_1,
  ciencias_de_la_computacion_1,
  ciencias_de_la_computacion_1_recursada,
  ciencias_de_la_computacion_2,
  ciencias_de_la_computacion_2_recursada,
  comunicacion_de_datos_1,
  comunicacion_de_datos_2,
  diseño_de_compiladores_1,
  diseño_de_sistemas_de_software,
  electricidad_y_magnetismo,
  electronica_digital,
  estructuras_de_almacenamiento_de_datos,
  fundamentos_de_economia_y_proyectos_de_inversion,
  fisica_general,
  fisica_general_recursada,
  ingenieria_de_software,
  ingles,
  introduccion_a_la_arquitectura_de_sistemas,
  introduccion_a_la_programacion_1,
  introduccion_a_la_programacion_1_recursada,
  introduccion_a_la_programacion_2,
  introduccion_a_la_programacion_2_recursada,
  introduccion_al_calculo_diferencial_e_integral,
  investigacion_operativa_1,
  legislacion_y_gestion_ambiental,
  lenguajes_de_programacion_1,
  matematica_discreta,
  matematica_discreta_recursada,
  metodologias_de_desarrollo_de_software_1,
  organizacion_empresarial,
  probabilidades_y_estadistica,
  programacion_exploratoria,
  programacion_orientada_a_objetos,
  programacion_orientada_a_objetos_recursada,
  quimica,
  sistemas_operativos_1,
  teoria_de_la_informacion,
  {
    id: '',
    name: '',
    status: localStorage.getItem(''),
    career: TUDAI_NAME,
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
  },
];
