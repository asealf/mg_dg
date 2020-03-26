import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitaMisura } from './../model/unita-misura';

@Injectable({
  providedIn: 'root'
})
export class UnitaMisuraService {

  private baseUrl: any = 'http://localhost:8080/unitamisura';
  public unitaMisura: UnitaMisura = new UnitaMisura();

  constructor(private http: HttpClient) { }

  public getAllUnitaMisura(): Observable<UnitaMisura> {
    const url = this.baseUrl + '/list';
    return this.http.get<UnitaMisura>(url);
  }

  public addUnitaMisura(unitaMisura: UnitaMisura): Observable<UnitaMisura> {
    const url = this.baseUrl + '/add';
    return this.http.post<UnitaMisura>(url, unitaMisura);
  }

  public updateUnitaMisura(unitaMisura: UnitaMisura): Observable<UnitaMisura> {
    const url = this.baseUrl + '/update';
    return this.http.put<UnitaMisura>(url, unitaMisura);
  }

  public deleteUnitaMisura(codice: string): Observable<UnitaMisura> {
    const url = this.baseUrl + '/delete/' + codice;
    return this.http.delete<UnitaMisura>(url);
  }

  // Return assigned variable product
  getter() {
    return this.unitaMisura;
  }

  // Set Value into variable product
  setter(unitaMisura: UnitaMisura) {
    this.unitaMisura = unitaMisura;
  }

}
