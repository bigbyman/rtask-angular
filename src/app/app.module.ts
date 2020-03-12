import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PatientsViewComponent} from './component/patients-view/patients-view.component';
import {PatientItemComponent} from './component/patient-item/patient-item.component';
import {PatientSearchComponent} from './component/patient-search/patient-search.component';
import {PatientListComponent} from './component/patient-list/patient-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {NavbarComponent} from './component/navbar/navbar.component';
import {SidenavComponent} from './component/sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {VisitService} from './service/visit.service';
import {PatientService} from './service/patient.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPatientsService} from './service/filter-patients.service';
import {AddVisitComponent} from './component/add-visit/add-visit.component';
import {VisitStepperComponent} from './component/visit-stepper/visit-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { VisitsViewComponent } from './component/visits-view/visits-view.component';
import { VisitSearchComponent } from './component/visit-search/visit-search.component';
import { VisitListComponent } from './component/visit-list/visit-list.component';
import { VisitItemComponent } from './component/visit-item/visit-item.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {FilterVisitsService} from './service/filter-visits.service';

const appRoutes: Routes = [
  {path: 'patients', component: PatientsViewComponent},
  {path: 'visit', component: AddVisitComponent},
  {path: 'visits', component: VisitsViewComponent},
  {path: '', redirectTo: '/patients', pathMatch: 'full'},
  {path: '**', component: PatientsViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsViewComponent,
    PatientItemComponent,
    PatientSearchComponent,
    PatientListComponent,
    NavbarComponent,
    SidenavComponent,
    AddVisitComponent,
    VisitStepperComponent,
    VisitsViewComponent,
    VisitSearchComponent,
    VisitListComponent,
    VisitItemComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [
    PatientService,
    VisitService,
    FilterPatientsService,
    MatDatepickerModule,
    FilterVisitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
