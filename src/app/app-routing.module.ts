import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrerasHomeComponent } from './carreras/carreras-home/carreras-home.component';
import { IngenieriaDeSistemasComponent } from './carreras/ingenieria-de-sistemas/ingenieria-de-sistemas.component';
import { LtaComponent } from './carreras/lta/lta.component';
import { TudaiComponent } from './carreras/tudai/tudai.component';
import { CatedrasComponent } from './catedras/catedras.component';
import { CursosGratuitosComponent } from './cursos-gratuitos/cursos-gratuitos.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FinalesComponent } from './finales/finales.component';
import { ConstructorAutomatasComponent } from './herramientas/constructor-automatas/constructor-automatas.component';
import { HerramientasHomeComponent } from './herramientas/herramientas-home/herramientas-home.component';
import { OperacionesConMatricesComponent } from './herramientas/operaciones-con-matrices/operaciones-con-matrices.component';
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
    path: 'carreras',
    component: CarrerasHomeComponent,
    data: { title: 'Carreras' },
  },
  {
    path: 'carreras/ingenieria-de-sistemas',
    component: IngenieriaDeSistemasComponent,
    data: { title: 'Carrera-Ingenieria-de-Sistemas' },
  },
  {
    path: 'carreras/licenciatura-en-tecnologia-ambiental',
    component: LtaComponent,
    data: { title: 'Carrera-Licenciatura-en-Tecnologia-Ambiental' },
  },
  {
    path: 'carreras/tudai',
    component: TudaiComponent,
    data: { title: 'Carrera-TUDAI' },
  },
  {
    path: 'catedras',
    component: CatedrasComponent,
    data: { title: 'Catedras' },
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
    path: 'cursos-gratuitos',
    component: CursosGratuitosComponent,
    data: { title: 'Cursos-Gratuitos' },
  },
  {
    path: 'subir-aportes',
    component: FileUploaderComponent,
    data: { title: 'Subir-Aportes' },
  },
  {
    path: 'herramientas',
    component: HerramientasHomeComponent,
    data: { title: 'Herramientas' },
  },
  {
    path: 'herramientas/operaciones-con-matrices',
    component: OperacionesConMatricesComponent,
    data: { title: 'Operaciones-con-Matrices' },
  },
  {
    path: 'herramientas/constructor-automatas',
    component: ConstructorAutomatasComponent,
    data: { title: 'Constructor-Automatas' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
