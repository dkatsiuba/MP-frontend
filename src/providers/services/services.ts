import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesProvider Provider');
  }

  getTasks(): Observable<any>{
    let login = "gregory";
    let password = "abc123";

    let headers = new HttpHeaders({ 'Content-Type':'/' });
    headers = headers.append("Authorization", "Basic " + btoa(login + ":" + password));
    return this.http.get<any>('http://localhost:8080/consultation', { headers: headers });
  }

}
