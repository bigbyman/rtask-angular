import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterPatientsService {

  private dataSource
    = new BehaviorSubject<{ name: string, lastName: string, pesel: string }>({name: null, lastName: null, pesel: null});
  data = this.dataSource.asObservable();

  constructor() {
  }

  setData(name: string, lastName: string, pesel: string) {
    this.dataSource.next({name, lastName, pesel});
  }
}
