import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../model/patient';
import {PatientService} from '../../service/patient.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.scss']
})
export class PatientItemComponent implements OnInit {

  @Input() patient: Patient;
  patientBackup: Patient;

  isDeleted = false;

  peselLength = 11;

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
    if (this.patient.id === undefined) {
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
    if (!this.patient.name || !this.patient.lastName || !this.patient.pesel) {
      this.showSnackBar('Data not complete', 'HIDE', false);
      return;
    }

    if (!/^\d+$/.test(this.patient.pesel)) {
      this.showSnackBar('Pesel must contain only digits', 'HIDE', false);
    } else if (this.patient.pesel.length !== 11) {
      this.showSnackBar('PESEL must contain 11 digits', 'HIDE', false);
    } else {
      if (this.patient.id === undefined) {
        this.savePost();
      } else {
        this.savePut();
      }
    }
  }

  savePost() {
    this.patientService.savePatient(this.patient).subscribe((patient) => {
        this.finishEditionSuccess();
        this.patient.id = patient.id;
        this.patientBackup = Object.assign({}, this.patient);
      },
      (error) => {
        this.showSnackBar(error, 'HIDE', false);
      });
  }

  savePut() {
    this.patientService.putPatient(this.patient).subscribe(() => {
        this.finishEditionSuccess();
        this.patientBackup = Object.assign({}, this.patient);
      },
      (error) => {
        this.showSnackBar(error, 'HIDE', false);
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
          },
          (error => {
            this.showSnackBar(error, 'HIDE', false);
          }));

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

  showSnackBar(message: string, action: string, success: boolean) {
    if (success) {
      this._matSnackBar.open(message, action, {duration: 2000});
    } else {
      this._matSnackBar.open(message, action, {duration: 1500, panelClass: 'alert-red'});
    }
  }

  finishEditionSuccess() {
    this.showEditButtons(false);
    this.showInputs(false);
    this.showSnackBar('Success', 'HIDE', true);
  }
}
