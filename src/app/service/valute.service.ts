import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Valute } from './../model/valute';

@Injectable({
  providedIn: 'root'
})
export class ValuteService {

  private baseUrl: any = 'http://localhost:8080/valute';
  public valute: Valute = new Valute();

  constructor(private http: HttpClient) { }

  public getAllValute(): Observable<Valute> {
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/list';
    return this.http.get<Valute>(url ,{headers} );
  }

  public addValute(valute: Valute): Observable<Valute> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/add';
    return this.http.post<Valute>(url, valute ,{headers} );
  }

  public updateValute(valute: Valute): Observable<Valute> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/update';
    return this.http.put<Valute>(url, valute ,{headers} );
  }

  public deleteValute(codice: string): Observable<Valute> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/delete/' + codice;
    return this.http.delete<Valute>(url ,{headers} );
  }

  // Return assigned variable product
  getter() {
    return this.valute;
  }

  // Set Value into variable product
  setter(valute: Valute) {
    this.valute = valute;
  }

}
