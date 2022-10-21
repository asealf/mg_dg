import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ditta } from './../model/ditta';
import { SharedService } from '../service/shared.service'

@Injectable({
  providedIn: 'root'
})
export class DittaService {

  // private baseUrl: any = 'http://localhost:8080/ditta';
  public ditta: Ditta = new Ditta();
  public baseUrl : string ;


  constructor(private http: HttpClient , private shr:SharedService ) {
    this.baseUrl = this.shr.getBaseUrl()+'/ditta';
   }

  public getDitta(): Observable<Ditta> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
      btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/get';

    return this.http.get<Ditta>(url,{headers});
  }

  /*
  public addDitta(ditta: Ditta): Observable<Ditta> {
    const url = this.baseUrl + '/add';
    return this.http.post<Ditta>(url, ditta);
  }
  */

  public updateDitta(ditta: Ditta): Observable<Ditta> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
      btoa( sessionStorage.getItem('isauth') )  });
      
    const url = this.baseUrl + '/update';
    return this.http.put<Ditta>(url, ditta ,{headers} );
  }

  /*
  public deleteDitta(id: number): Observable<Ditta> {
    const url = this.baseUrl + '/delete/' + id;
    return this.http.delete<Ditta>(url);
  }
  */

  // Return assigned variable product
  getter() {
    return this.ditta;
  }

  // Set Value into variable product
  setter(ditta: Ditta) {
    this.ditta = ditta;
  }


}
