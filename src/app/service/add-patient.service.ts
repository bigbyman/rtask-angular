import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {
  private dataSource = new BehaviorSubject<boolean>(false);
  data = this.dataSource.asObservable();

  constructor() {
  }

  setData(addNew: boolean) {
    this.dataSource.next(addNew);
  }
}
