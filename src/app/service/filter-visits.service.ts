import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterVisitsService {

  private dataSource = new BehaviorSubject<{ pesel: string, date: string }>({pesel: null, date: null});
  data = this.dataSource.asObservable();

  constructor() {
  }

  setData(pesel: string, date: string) {
    this.dataSource.next({pesel, date});
  }
}
