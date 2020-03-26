import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ditta } from './../model/ditta';

@Injectable({
  providedIn: 'root'
})
export class DittaService {

  private baseUrl: any = 'http://localhost:8080/ditta';
  public ditta: Ditta = new Ditta();

  constructor(private http: HttpClient) { }

  public getDitta(): Observable<Ditta> {
    const url = this.baseUrl + '/get';
    return this.http.get<Ditta>(url);
  }

  /*
  public addDitta(ditta: Ditta): Observable<Ditta> {
    const url = this.baseUrl + '/add';
    return this.http.post<Ditta>(url, ditta);
  }
  */

  public updateDitta(ditta: Ditta): Observable<Ditta> {
    const url = this.baseUrl + '/update';
    return this.http.put<Ditta>(url, ditta);
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
