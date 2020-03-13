import {Component, Input, OnInit} from '@angular/core';
import {Visit} from '../../model/visit';
import {Patient} from '../../model/patient';

@Component({
  selector: 'app-visit-item',
  templateUrl: './visit-item.component.html',
  styleUrls: ['./visit-item.component.scss']
})
export class VisitItemComponent implements OnInit {

  @Input() visit: Visit;
  patient: Patient;

  constructor() { }

  ngOnInit(): void {
    this.patient = this.visit.patient;
  }

}
