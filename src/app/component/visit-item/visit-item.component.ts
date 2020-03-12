import {Component, Input, OnInit} from '@angular/core';
import {Visit} from '../../model/visit';
import {Patient} from '../../model/patient';

@Component({
  selector: 'app-visit-item',
  templateUrl: './visit-item.component.html',
  styleUrls: ['./visit-item.component.css']
})
export class VisitItemComponent implements OnInit {

  @Input() visit: Visit;
  patient: Patient;

  constructor() { }

  ngOnInit(): void {
    console.log(this.visit);
    this.patient = this.visit.patient;
  }

}
