import {Component, OnInit} from '@angular/core';
import {VisitService} from '../../service/visit.service';
import {Visit} from '../../model/visit';
import {FilterVisitsService} from '../../service/filter-visits.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  visits: Visit[];

  constructor(private visitService: VisitService,
              private filterVisitsService: FilterVisitsService,) {
  }

  ngOnInit(): void {
    this.filterVisitsService.data.subscribe((data) => {
      if(data.date !== null && data.pesel === null){
        this.visitService.getAllVisitsByDate(data.date).subscribe(visits => this.visits = visits);
      } else if (data.date === null && data.pesel !== null) {
        this.visitService.getAllVisitsByPesel(data.pesel).subscribe(visits => this.visits = visits);
      } else if(data.date === '' && data.pesel === ''){
        this.getAllVisits();
      }
    });
    this.getAllVisits();
  }

  private getAllVisits() {
    this.visitService.getAllVisits()
      .subscribe(data => this.visits = data);
  }
}
