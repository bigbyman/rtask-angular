import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private visitApiUrl = environment.visitApiUrl;

  constructor(private http: HttpClient) {
  }
}
