import {Component, OnInit} from '@angular/core';
import {FilterPatientsService} from '../../service/filter-patients.service';
import {AddPatientService} from '../../service/add-patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  name = '';
  lastName = '';
  pesel = '';

  constructor(private filterPatientsService: FilterPatientsService,
              private addPatientService: AddPatientService) {
  }

  ngOnInit() {
  }

  onSearch() {
    this.filterPatientsService.setData(this.name, this.lastName, this.pesel);
  }

  onShowAll() {
    this.filterPatientsService.setData('', '', '');
    this.name = '';
    this.lastName = '';
    this.pesel = '';
  }

  addNewPatient() {
    this.addPatientService.setData(true);
  }

}
