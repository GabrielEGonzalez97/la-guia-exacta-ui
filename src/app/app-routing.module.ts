import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatedrasComponent } from './catedras/catedras.component';
import { FinalesComponent } from './finales/finales.component';
import { IngenieriaDeSistemasComponent } from './ingenieria-de-sistemas/ingenieria-de-sistemas.component';
import { TudaiComponent } from './tudai/tudai.component';
import { VideosClasesComponent } from './videos-clases/videos-clases.component';

const routes: Routes = [
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
    path: 'finales/:subjectName',
    component: FinalesComponent,
  },
  {
    path: 'videos-clases/:subjectName',
    component: VideosClasesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
