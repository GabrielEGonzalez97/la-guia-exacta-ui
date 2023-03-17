import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatedrasComponent } from './catedras/catedras.component';
import { FinalesComponent } from './finales/finales.component';

const routes: Routes = [
  {
    path: 'catedras',
    component: CatedrasComponent,
  },
  {
    path: 'finales/:subjectName',
    component: FinalesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
