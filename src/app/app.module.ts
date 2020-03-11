import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PatientsViewComponent} from './component/patients-view/patients-view.component';
import { PatientItemComponent } from './component/patient-item/patient-item.component';
import { PatientSearchComponent } from './component/patient-search/patient-search.component';
import { PatientListComponent } from './component/patient-list/patient-list.component';

const appRoutes: Routes = [
  {path: 'patients', component: PatientsViewComponent},
  {path: '', redirectTo: '/patients', pathMatch: 'full'},
  {path: '**', component: PatientsViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsViewComponent,
    PatientItemComponent,
    PatientSearchComponent,
    PatientListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
