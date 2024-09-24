import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreComponent } from './components/explore/explore.component';
import { HeaderComponent } from './components/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule} from '@angular/common/http';
import { InfoDialogComponent } from './shared/dialogs/info-dialog/info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { GestionCitasComponent } from './components/gestionCitas/gestionCitas.component';
import { GestionCitasFormComponent } from './components/gestionCitas/gestionCitas-form/gestionCitas-form.component';
import { CancelCitaComponent } from './components/cancel-cita/cancel-cita.component';

const appRoutes: Routes = [
  {path: '', component: ExploreComponent},
  {path: 'gestioncitas/:MEDICO_ID', component: GestionCitasComponent},
  {path: 'cancel', component: CancelCitaComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    GestionCitasComponent,
    GestionCitasFormComponent,
    HeaderComponent,
    InfoDialogComponent,
    CancelCitaComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
