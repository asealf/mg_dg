import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoRegistro } from './../model/tipo-registro';
import { SharedService } from '../service/shared.service'

@Injectable({
  providedIn: 'root'
})

export class TipoRegistroService {

  public baseUrl : string ;
  // private baseUrl: any = 'http://localhost:8080/tiporegistro';
  public tipoRegistro: TipoRegistro = new TipoRegistro();

  constructor(private http: HttpClient , private shr:SharedService) {
    this.baseUrl = this.shr.getBaseUrl()+'/tiporegistro';
   }

  public getAllTipoRegistro(): Observable<TipoRegistro> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/list';
    return this.http.get<TipoRegistro>(url ,{headers} );
  }

  public addTipoRegistro(tipoRegistro: TipoRegistro): Observable<TipoRegistro> {
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/add';
    return this.http.post<TipoRegistro>(url, tipoRegistro ,{headers} );
  }

  public updateTipoRegistro(tipoRegistro: TipoRegistro): Observable<TipoRegistro> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/update';
    return this.http.put<TipoRegistro>(url, tipoRegistro ,{headers} );
  }

  public deleteTipoRegistro(codice: string): Observable<TipoRegistro> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/delete/' + codice;
    return this.http.delete<TipoRegistro>(url ,{headers} );
  }

  // Return assigned variable product
  getter() {
    return this.tipoRegistro;
  }

  // Set Value into variable product
  setter(tipoRegistro: TipoRegistro) {
    this.tipoRegistro = tipoRegistro;
  }

}
