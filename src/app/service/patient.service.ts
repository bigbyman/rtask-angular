import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {Patient} from '../model/patient';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientApiUrl = environment.patientApiUrl;

  constructor(private http: HttpClient,
              private _matSnackBar: MatSnackBar) {
  }

  public getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientApiUrl);
  }

  public getAllPatientsBy(name: string, lastName: string, pesel: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientApiUrl + '/query?name=' + name + '&lastName=' + lastName + '&pesel=' + pesel);
  }

  public savePatient(patient: Patient) {
    return this.http.post<Patient>(this.patientApiUrl, patient)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deletePatient(id: number) {
    return this.http.delete(this.patientApiUrl + '?id=' + id)
      .pipe(
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
      'Something bad happened. Please try again later.');
  }
}
