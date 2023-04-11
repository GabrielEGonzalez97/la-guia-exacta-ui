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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'carreras/ingenieria-de-sistemas',
    component: IngenieriaDeSistemasComponent,
  },
  {
    path: 'carreras/tudai',
    component: TudaiComponent,
  },
  {
    path: 'catedras',
    component: CatedrasComponent,
  },
  {
    path: 'parciales/:subjectName',
    component: ParcialesComponent,
  },
  {
    path: 'finales/:subjectName',
    component: FinalesComponent,
  },
  {
    path: 'resumenes/:subjectName',
    component: ResumenesComponent,
  },
  {
    path: 'videos-clases/:subjectName',
    component: VideosClasesComponent,
  },
  {
    path: 'cursos-gratuitos',
    component: CursosGratuitosComponent,
  },
  { path: 'subir-aportes', component: FileUploaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
