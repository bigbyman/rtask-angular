import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../model/patient';
import {PatientService} from '../../service/patient.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {

  @Input() patient: Patient;
  patientBackup: Patient;

  isDeleted = false;

  showSaveButton = false;
  showCancelButton = false;
  nameInputClass = 'hidden-input';
  lastNameInputClass = 'hidden-input';
  peselInputClass = 'hidden-input';

  constructor(private patientService: PatientService,
              private _matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.patientBackup = Object.assign({}, this.patient);
    if (this.patient.lastName === 'Last name') {
      this.showEditButtons(true);
      this.showInputs(true);
    }
  }

  setNameEditable() {
    this.nameInputClass = 'shown-input';
    this.patient.name = '';
    this.showEditButtons(true);
  }

  setLastNameEditable() {
    this.lastNameInputClass = 'shown-input';
    this.patient.lastName = '';
    this.showEditButtons(true);
  }

  setPeselEditable() {
    this.peselInputClass = 'shown-input';
    this.patient.pesel = '';
    this.showEditButtons(true);
  }

  onSave() {
    this.patientService.savePatient(this.patient).subscribe(() => {
        this.showEditButtons(false);
        this.showInputs(false);
        this.showSnackBar('Success', 'HIDE');
      },
      (error) => {
        this.showSnackBar(error, 'HIDE');
      });
  }

  onCancel() {
    if (this.patient.id === undefined) {
      this.isDeleted = true;
    }

    this.patient = Object.assign({}, this.patientBackup);

    this.showEditButtons(false);
    this.showInputs(false);
  }

  onDelete() {
    if (this.patient.id !== undefined) {
      this.patientService.deletePatient(this.patient.id)
        .subscribe((v) => {
          this.isDeleted = true;
        });

    } else {
      this.isDeleted = true;
    }
  }

  showEditButtons(visible: boolean) {
    this.showCancelButton = visible;
    this.showSaveButton = visible;
  }

  showInputs(visible: boolean) {
    if (visible) {
      this.nameInputClass = 'shown-input';
      this.lastNameInputClass = 'shown-input';
      this.peselInputClass = 'shown-input';
    } else {
      this.nameInputClass = 'hidden-input';
      this.lastNameInputClass = 'hidden-input';
      this.peselInputClass = 'hidden-input';

    }
  }

  showSnackBar(message: string, action: string) {
    this._matSnackBar.open(message, action, {duration: 2000});
  }

}
