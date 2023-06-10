import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatedrasComponent } from './catedras/catedras.component';
import { CursosGratuitosComponent } from './cursos-gratuitos/cursos-gratuitos.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FinalesComponent } from './finales/finales.component';
import { HomeComponent } from './home/home.component';
import { IngenieriaDeSistemasComponent } from './ingenieria-de-sistemas/ingenieria-de-sistemas.component';
import { ParcialesComponent } from './parciales/parciales.component';
import { ResumenesComponent } from './resumenes/resumenes.component';
import { TudaiComponent } from './tudai/tudai.component';
import { VideosClasesComponent } from './videos-clases/videos-clases.component';
import { LtaComponent } from './lta/lta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Homepage' },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
