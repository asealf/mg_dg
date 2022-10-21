import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitaMisura } from './../model/unita-misura';
import { SharedService } from '../service/shared.service'

@Injectable({
  providedIn: 'root'
})
export class UnitaMisuraService {
  
  public baseUrl : string ;
  // private baseUrl: any = 'http://localhost:8080/unitamisura';
  public unitaMisura: UnitaMisura = new UnitaMisura();

  constructor(private http: HttpClient, private shr:SharedService ) { 
    this.baseUrl = this.shr.getBaseUrl()+'/unitamisura';
  }

  public getAllUnitaMisura(): Observable<UnitaMisura> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/list';
    return this.http.get<UnitaMisura>(url ,{headers} );
  }

  public addUnitaMisura(unitaMisura: UnitaMisura): Observable<UnitaMisura> {
   
    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/add';
    return this.http.post<UnitaMisura>(url, unitaMisura ,{headers} );
  }

  public updateUnitaMisura(unitaMisura: UnitaMisura): Observable<UnitaMisura> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/update';
    return this.http.put<UnitaMisura>(url, unitaMisura,{headers} );
  }

  public deleteUnitaMisura(codice: string): Observable<UnitaMisura> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/delete/' + codice;
    return this.http.delete<UnitaMisura>(url,{headers} );
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
