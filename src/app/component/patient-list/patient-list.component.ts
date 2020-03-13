import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../model/patient';
import {FilterPatientsService} from '../../service/filter-patients.service';
import {AddPatientService} from '../../service/add-patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService,
              private filterPatientsService: FilterPatientsService,
              private addPatientService: AddPatientService) {
  }

  ngOnInit() {
    this.filterPatientsService.data.subscribe((data) => {
      this.patientService.getAllPatientsBy(data.name, data.lastName, data.pesel)
        .subscribe(patients => {
          this.patients = patients;
        });
    });
    this.getAllPatients();
    this.addPatientService.data.subscribe(data => {
      if (data) {
        this.addNewPatient();
      }
    });
  }

  private getAllPatients() {
    this.patientService.getAllPatients()
      .subscribe(data => {
        this.patients = data;

      });


  }

  public addNewPatient() {
    const patient: Patient = new Patient();

    patient.name = 'Name';
    patient.lastName = 'Last name';
    patient.pesel = 'Pesel';

    // this.patients.push(patient);
    this.patients.unshift(patient);
  }

}
