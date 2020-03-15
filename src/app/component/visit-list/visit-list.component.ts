import {Component, OnInit} from '@angular/core';
import {VisitService} from '../../service/visit.service';
import {Visit} from '../../model/visit';
import {FilterVisitsService} from '../../service/filter-visits.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {
  visits: Visit[];

  isLoading = true;
  isEmpty = false;

  constructor(private visitService: VisitService,
              private filterVisitsService: FilterVisitsService,
              private _matSnackBar: MatSnackBar) {
    this.visits = new Array<Visit>();
  }

  ngOnInit(): void {
    this.filterVisitsService.data.subscribe((data) => {
      this.isLoading = true;
      if (data.date !== null && data.pesel === null) {
        this.visitService.getAllVisitsByDate(data.date).subscribe(visits => {
            this.visits = visits;
          },
          (error => {
            this.showSnackBar(error, 'HIDE', false);
            this.filterVisitsService.setData('', '');
          }),
          () => {
            this.isLoading = false;
          });

      } else if (data.date === null && data.pesel !== null) {
        this.visitService.getAllVisitsByPesel(data.pesel).subscribe(visits => {
            this.visits = visits;
          },
          (error => {
            this.showSnackBar(error, 'HIDE', false);
            this.filterVisitsService.setData('', '');
          }),
          () => {
            this.checkIfVisistsEmpty();
            this.isLoading = false;
          });

      } else if (data.date === '' && data.pesel === '') {
        this.getAllVisits();
      }
    });

    this.getAllVisits();
  }

  private getAllVisits() {
    this.visitService.getAllVisits()
      .subscribe(data => {
          this.visits = data;
        },
        (error => {
        }),
        () => {
          this.checkIfVisistsEmpty();
          this.isLoading = false;
        });
  }

  showSnackBar(message: string, action: string, success: boolean) {
    if (success) {
      this._matSnackBar.open(message, action, {duration: 2000});
    } else {
      this._matSnackBar.open(message, action, {duration: 1500, panelClass: 'alert-red'});
    }
  }

  checkIfVisistsEmpty() {
    this.isEmpty = this.visits.length === 0;
  }
}
