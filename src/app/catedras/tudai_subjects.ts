import {
  FIRST_QUARTER_NAME,
  FIRST_YEAR_NAME,
  ISubject,
  SECOND_QUARTER_NAME,
  SECOND_YEAR_NAME,
  TUDAI_NAME,
} from './interfaces';

export let ingles_1: ISubject = {
  id: 'ingles_1',
  name: 'Inglés I',
  status: localStorage.getItem('ingles_1'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Barandiaran, Carolina',
  contactEmail: 'barandiarancarolina@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0198',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0198',
  webLink: 'http://ingles-i.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=655',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let programacion_1: ISubject = {
  id: 'programacion_1',
  name: 'Programación 1',
  status: localStorage.getItem('programacion_1'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Boroni, Gustavo Adolfo',
  contactEmail: 'gboroni@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0216',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0216',
  webLink: 'http://tudai1-1.alumnos.exa.unicen.edu.ar/',
  moodleLink: '',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let taller_de_matematica_computacional: ISubject = {
  id: 'taller_de_matematica_computacional',
  name: 'Taller de Matemática Computacional',
  status: localStorage.getItem('taller_de_matematica_computacional'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Dalponte, Diego David',
  contactEmail: 'diego.dalponte@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0218',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0218',
  webLink: 'http://tudai1-1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=679',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let web_1: ISubject = {
  id: 'web_1',
  name: 'Web 1',
  status: localStorage.getItem('web_1'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0217',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0217',
  webLink: 'http://tudai1-1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=651',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let ingles_2: ISubject = {
  id: 'ingles_2',
  name: 'Inglés 2',
  status: localStorage.getItem('ingles_2'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Cañedo, Claudia',
  contactEmail: 'clcanedo@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0199',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0199',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=711',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let programacion_2: ISubject = {
  id: 'programacion_2',
  name: 'Programación 2',
  status: localStorage.getItem('programacion_2'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Berdun, Luis Sebastian',
  contactEmail: 'lberdun@exa.unicen.edu.ar',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0221',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0221',
  webLink: 'http://tudai1-2.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=784',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let tecnicas_de_documentacion_y_validacion: ISubject = {
  id: 'tecnicas_de_documentacion_y_validacion',
  name: 'Técnicas de documentación y validación',
  status: localStorage.getItem('tecnicas_de_documentacion_y_validacion'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: 'Gonzalez Cisaro, Sandra Elizabeth',
  contactEmail: 'sagonci@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0219',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0219',
  webLink: 'http://tudai1-2.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=773',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let web_2: ISubject = {
  id: 'web_2',
  name: 'Web 2',
  status: localStorage.getItem('web_2'),
  career: TUDAI_NAME,
  year: FIRST_YEAR_NAME,
  quarter: SECOND_QUARTER_NAME,
  teacher: '',
  contactEmail: '',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0220',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0220',
  webLink: 'http://tudai1-2.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=757',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let bases_de_datos_tudai: ISubject = {
  id: 'bases_de_datos_tudai',
  name: 'Bases de Datos',
  status: localStorage.getItem('bases_de_datos_tudai'),
  career: TUDAI_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Ferraggine, Viviana Elizabeth',
  contactEmail: 'viviana.ferraggine@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0519',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0519',
  webLink: '',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=638',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let configuracion_y_desarrollo_de_aplicaciones_en_redes: ISubject = {
  id: 'configuracion_y_desarrollo_de_aplicaciones_en_redes',
  name: 'Configuración y desarrollo de aplicaciones en redes',
  status: localStorage.getItem(
    'configuracion_y_desarrollo_de_aplicaciones_en_redes'
  ),
  career: TUDAI_NAME,
  year: SECOND_YEAR_NAME,
  quarter: FIRST_QUARTER_NAME,
  teacher: 'Rubiales, Aldo Jose',
  contactEmail: 'aldorubiales@gmail.com',
  modalidadLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=planificacion&materia=0223',
  programaLink:
    'https://aplicaciones.exa.unicen.edu.ar/Docentes/1.0/ws.php?servicio=programa&materia=0223',
  webLink: 'http://tudai2-1.alumnos.exa.unicen.edu.ar/',
  moodleLink: 'https://moodle.exa.unicen.edu.ar/course/edit.php?id=670',
  clasesLink: '',
  resumenesLink: '',
  parcialesLink: '',
  finalesLink: '',
  correlatives: [],
};

export let a: ISubject = {
  id: '',
  name: '',
  status: localStorage.getItem(''),
  career: TUDAI_NAME,
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

export let tudai_subjects: ISubject[] = [
  ingles_1,
  programacion_1,
  taller_de_matematica_computacional,
  web_1,
  ingles_2,
  programacion_2,
  tecnicas_de_documentacion_y_validacion,
  web_2,
  bases_de_datos_tudai,
  configuracion_y_desarrollo_de_aplicaciones_en_redes,
];
