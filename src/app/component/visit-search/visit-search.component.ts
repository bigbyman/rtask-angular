import { Component, OnInit } from '@angular/core';
import {FilterVisitsService} from '../../service/filter-visits.service';

@Component({
  selector: 'app-visit-search',
  templateUrl: './visit-search.component.html',
  styleUrls: ['./visit-search.component.css']
})
export class VisitSearchComponent implements OnInit {

  pesel = '';
  date = '';


  constructor(private filterVisitsService: FilterVisitsService) { }

  ngOnInit(): void {
  }

  onPeselSearch() {
    this.filterVisitsService.setData(this.pesel, null);
  }

  onDateSearch() {
    this.filterVisitsService.setData(null, this.date);
  }

  onShowAll() {
    this.filterVisitsService.setData('', '');
    this.pesel = '';
    this.date = '';
  }

}
