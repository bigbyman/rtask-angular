import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Patient} from '../../model/patient';
import {VisitService} from '../../service/visit.service';
import {Visit} from '../../model/visit';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-visit-stepper',
  templateUrl: './visit-stepper.component.html',
  styleUrls: ['./visit-stepper.component.scss']
})
export class VisitStepperComponent implements OnInit {
  @ViewChild('stepper', {static: true}) stepper: MatStepper;
  @Input() patients: Patient[];
  @Input() isSelectLoading = true;

  textAreaMaxLength = 255;

  caseStudyFormGroup: FormGroup;
  diagnosisTreatmentFormGroup: FormGroup;
  selectFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private visitService: VisitService,
              private _matSnackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.selectFormGroup = this._formBuilder.group({
      selectCtrl: ['', Validators.required]
    });
    this.caseStudyFormGroup = this._formBuilder.group({
      interview: ['', Validators.required],
      physical: ['', Validators.required]
    });
    this.diagnosisTreatmentFormGroup = this._formBuilder.group({
      diagnosis: ['', Validators.required],
      treatment: ['', Validators.required]
    });
  }

  onSave() {
    const visit = new Visit();

    visit.interviewExamination = this.caseStudyFormGroup.controls.interview.value;
    visit.physicalExamination = this.caseStudyFormGroup.controls.physical.value;
    visit.diagnosis = this.diagnosisTreatmentFormGroup.controls.diagnosis.value;
    visit.treatment = this.diagnosisTreatmentFormGroup.controls.treatment.value;
    visit.localDate = new Date().toLocaleDateString();

    this.visitService.saveVisit(visit, this.selectFormGroup.controls.selectCtrl.value.id)
      .subscribe(() => {
        this._matSnackbar.open('Success', 'HIDE', {duration: 2000});
        this.stepper.reset();
        },
        (error => {
          this._matSnackbar.open(error, 'HIDE', {duration: 2000});
        }));
  }
}
