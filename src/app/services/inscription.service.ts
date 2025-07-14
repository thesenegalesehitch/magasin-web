import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inscription} from '../modeles';
import {Observable} from 'rxjs';
import any = jasmine.any;
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }

  inscrire(inscription: Inscription): Observable<void>{
    // premiere maniere
    // const url:environment.apiBaseUrl+'/inscription';
    //deuxieme maniere
    const url=`${environment.apiBaseUrl}/api/v1/inscriptions`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<void>(url.inscription,{headers})

  }
}
