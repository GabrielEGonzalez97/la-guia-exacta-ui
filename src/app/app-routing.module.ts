import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasHomeComponent } from './carreras/carreras-home/carreras-home.component';
import { IngenieriaDeSistemasComponent } from './carreras/ingenieria-de-sistemas/ingenieria-de-sistemas.component';
import { LtaComponent } from './carreras/lta/lta.component';
import { TudaiComponent } from './carreras/tudai/tudai.component';
import { CatedrasComponent } from './catedras/catedras.component';
import {
  CARRERAS_PAGE_SECTION,
  CATEDRAS_PAGE_SECTION,
  CONSTRUCTOR_DE_AUTOMATAS_PAGE_SECTION,
  CURSOS_GRATUITOS_PAGE_SECTION,
  HERRAMIENTAS_PAGE_SECTION,
  INGENIERIA_DE_SISTEMAS_PAGE_SECTION,
  LTA_PAGE_SECTION,
  OPERACIONES_CON_MATRICES_PAGE_SECTION,
  PARSING_ASCENDENTE_PAGE_SECTION,
  SUBIR_APORTES_PAGE_SECTION,
  TUDAI_PAGE_SECTION,
} from './common/constants';
import { CursosGratuitosComponent } from './cursos-gratuitos/cursos-gratuitos.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FinalesComponent } from './finales/finales.component';
import { ConstructorAutomatasComponent } from './herramientas/constructor-automatas/constructor-automatas.component';
import { HerramientasHomeComponent } from './herramientas/herramientas-home/herramientas-home.component';
import { OperacionesConMatricesComponent } from './herramientas/operaciones-con-matrices/operaciones-con-matrices.component';
import { ParsingAscendenteComponent } from './herramientas/parsing-ascendente/parsing-ascendente.component';
import { HomeComponent } from './home/home.component';
import { ParcialesComponent } from './parciales/parciales.component';
import { ResumenesComponent } from './resumenes/resumenes.component';
import { VideosClasesComponent } from './videos-clases/videos-clases.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Homepage' },
  },
  {
    path: CARRERAS_PAGE_SECTION.route,
    component: CarrerasHomeComponent,
    data: { title: CARRERAS_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: INGENIERIA_DE_SISTEMAS_PAGE_SECTION.route,
    component: IngenieriaDeSistemasComponent,
    data: { title: INGENIERIA_DE_SISTEMAS_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: LTA_PAGE_SECTION.route,
    component: LtaComponent,
    data: { title: LTA_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: TUDAI_PAGE_SECTION.route,
    component: TudaiComponent,
    data: { title: TUDAI_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: CATEDRAS_PAGE_SECTION.route,
    component: CatedrasComponent,
    data: { title: CATEDRAS_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: 'parciales/:subjectName',
    component: ParcialesComponent,
    data: { title: 'Parciales' },
  },
  {
    path: 'finales/:subjectName',
    component: FinalesComponent,
    data: { title: 'Finales' },
  },
  {
    path: 'resumenes/:subjectName',
    component: ResumenesComponent,
    data: { title: 'Resumenes' },
  },
  {
    path: 'videos-clases/:subjectName',
    component: VideosClasesComponent,
    data: { title: 'Videos-Clases' },
  },
  {
    path: CURSOS_GRATUITOS_PAGE_SECTION.route,
    component: CursosGratuitosComponent,
    data: { title: CURSOS_GRATUITOS_PAGE_SECTION.route },
  },
  {
    path: SUBIR_APORTES_PAGE_SECTION.route,
    component: FileUploaderComponent,
    data: { title: SUBIR_APORTES_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: HERRAMIENTAS_PAGE_SECTION.route,
    component: HerramientasHomeComponent,
    data: { title: HERRAMIENTAS_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: OPERACIONES_CON_MATRICES_PAGE_SECTION.route,
    component: OperacionesConMatricesComponent,
    data: { title: OPERACIONES_CON_MATRICES_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: CONSTRUCTOR_DE_AUTOMATAS_PAGE_SECTION.route,
    component: ConstructorAutomatasComponent,
    data: { title: CONSTRUCTOR_DE_AUTOMATAS_PAGE_SECTION.titleGoogleAnalytics },
  },
  {
    path: PARSING_ASCENDENTE_PAGE_SECTION.route,
    component: ParsingAscendenteComponent,
    data: { title: PARSING_ASCENDENTE_PAGE_SECTION.titleGoogleAnalytics },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
