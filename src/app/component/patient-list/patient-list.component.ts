import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../model/patient';
import {FilterPatientsService} from '../../service/filter-patients.service';
import {AddPatientService} from '../../service/add-patient.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('.8s ease-out', style({opacity: '1'})),
      ]),
    ])
  ]
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  isLoading = true;
  isEmpty = false;

  constructor(private patientService: PatientService,
              private filterPatientsService: FilterPatientsService,
              private addPatientService: AddPatientService) {
    this.patients = new Array<Patient>();
  }

  ngOnInit() {
    this.filterPatientsService.data.subscribe((data) => {
      this.isLoading = true;
      this.patientService.getAllPatientsBy(data.name, data.lastName, data.pesel)
        .subscribe(patients => {
            this.patients = patients;
          },
          (error => {

          }),
          () => {
            this.checkIfPatientsEmpty();
            this.isLoading = false;
          });
    });

    this.addPatientService.setData(false);
    this.addPatientService.data.subscribe(data => {
      if (data) {
        this.addNewPatient();
        this.checkIfPatientsEmpty();
      }
    });

    this.getAllPatients();
  }

  private getAllPatients() {
    this.patientService.getAllPatients()
      .subscribe(data => {
          this.patients = data;
        },
        (error => {

        }),
        () => {
          this.checkIfPatientsEmpty();
          this.isLoading = false;
        });
  }

  public addNewPatient() {
    const patient: Patient = new Patient();

    patient.name = 'Name';
    patient.lastName = 'Last name';
    patient.pesel = 'Pesel';

    this.patients.unshift(patient);
  }

  checkIfPatientsEmpty() {
    this.isEmpty = this.patients.length === 0;
  }
}
