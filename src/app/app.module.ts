import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InterfazComponent } from './interfaz/interfaz.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

//servicios
import {AuthService} from './services/auth.service';
import {StorageService} from './services/storage.service';
import {AuthGuard} from './services/auth.guard';



//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';

export const firebaseConfig = environment.firebaseConfig;

import {PermisionResolve} from './services/permision.resolve';

import { RouterModule, Routes } from '@angular/router';
import { CardProfesoresComponent, DialogHorario } from './card-profesores/card-profesores.component';
import { CardLaboratorioComponent } from './card-laboratorio/card-laboratorio.component';
import { SelecLaboratirioComponent } from './selec-laboratirio/selec-laboratirio.component';
import { RegistarDocenteComponent } from './registar-docente/registar-docente.component';
import { RegistrarMateriasComponent } from './registrar-materias/registrar-materias.component';
import { CardLaboratorio2Component } from './card-laboratorio2/card-laboratorio2.component';
// material

import {MatDialogModule} from '@angular/material/dialog';
import { ReporteComponent } from './reporte/reporte.component';

const appRoutes: Routes = [
  { path: '', component: InterfazComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginComponent },
  { path: 'card', component: CardProfesoresComponent },
  { path: 'horario/:id', component: CardLaboratorio2Component },
  { path: 'reporte/:id', component: ReporteComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InterfazComponent,
    CardProfesoresComponent,
    CardLaboratorioComponent,
    SelecLaboratirioComponent,
    RegistarDocenteComponent,
    RegistrarMateriasComponent,
    CardLaboratorio2Component,
    DialogHorario,
    ReporteComponent
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatProgressBarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatDialogModule,
  ],
  providers: [
    PermisionResolve,
    AuthService,
    StorageService,
    AuthGuard,
  ],
  entryComponents:[
    DialogHorario
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
