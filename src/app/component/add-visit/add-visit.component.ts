import { Component, OnInit } from '@angular/core';
import {Patient} from '../../model/patient';
import {PatientService} from '../../service/patient.service';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.scss']
})
export class AddVisitComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllPatients()
      .subscribe(data => this.patients = data);
  }

}
