import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaceholderModule } from 'carbon-components-angular';
import { ActionsBarModule } from './actions-bar/actions-bar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatedrasModule } from './catedras/catedras.module';
import { CursosGratuitosModule } from './cursos-gratuitos/cursos-gratuitos.module';
import { FileUploaderComponentModule } from './file-uploader/file-uploader.module';
import { FinalesModule } from './finales/finales.module';
import { FooterModule } from './footer/footer.module';
import { OperacionesConMatricesModule } from './herramientas/operaciones-con-matrices/operaciones-con-matrices.module';
import { HomeModule } from './home/home.module';
import { IngenieriaDeSistemasModule } from './ingenieria-de-sistemas/ingenieria-de-sistemas.module';
import { LtaModule } from './lta/lta.module';
import { NavbarModule } from './navbar/navbar.module';
import { ParcialesModule } from './parciales/parciales.module';
import { ResumenesModule } from './resumenes/resumenes.module';
import { TudaiModule } from './tudai/tudai.module';
import { VideosClasesModule } from './videos-clases/videos-clases.module';

import { MathjaxModule } from 'mathjax-angular';

const MODULE_IMPORTS = [AppRoutingModule, BrowserModule, HttpClientModule];

const COMPONENT_IMPORTS = [
  ActionsBarModule,
  CatedrasModule,
  CursosGratuitosModule,
  FileUploaderComponentModule,
  FinalesModule,
  FooterModule,
  HomeModule,
  IngenieriaDeSistemasModule,
  LtaModule,
  NavbarModule,
  OperacionesConMatricesModule,
  ParcialesModule,
  ResumenesModule,
  VideosClasesModule,
  TudaiModule,
];

const CARBON_COMPONENTS_IMPORTS = [PlaceholderModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    MODULE_IMPORTS,
    COMPONENT_IMPORTS,
    CARBON_COMPONENTS_IMPORTS,
    MathjaxModule.forRoot({
      config: {
        loader: {
          load: ['output/svg', '[tex]/require', '[tex]/ams', '[tex]/color'],
        },
        tex: {
          inlineMath: [['$', '$']],
          packages: ['base', 'require', 'ams', 'color'],
        },
        svg: { fontCache: 'global' },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
