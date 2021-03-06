import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Visit} from '../model/visit';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private visitApiUrl = environment.visitApiUrl;
  private delay = 2000;

  constructor(private http: HttpClient) {
  }

  public getAllVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.visitApiUrl)
      .pipe(
        delay(this.delay),
        catchError(this.handleError)
      );
  }

  public saveVisit(visit: Visit, id: number) {
    return this.http.post<Visit>(this.visitApiUrl + '?id=' + id, visit)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getAllVisitsByDate(date: string){
    return this.http.get<Visit[]>(this.visitApiUrl + '/byDate?date=' + date)
      .pipe(
        delay(this.delay),
        catchError(this.handleError)
      );
  }

  public getAllVisitsByPesel(pesel: string) {
    return this.http.get<Visit[]>(this.visitApiUrl + '/forPatient?pesel=' + pesel)
      .pipe(
        delay(this.delay),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      error.error.message);
  }

}
