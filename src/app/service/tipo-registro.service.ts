import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoRegistro } from './../model/tipo-registro';

@Injectable({
  providedIn: 'root'
})

export class TipoRegistroService {

  private baseUrl: any = 'http://localhost:8080/tiporegistro';
  public tipoRegistro: TipoRegistro = new TipoRegistro();

  constructor(private http: HttpClient) { }

  public getAllTipoRegistro(): Observable<TipoRegistro> {
    const url = this.baseUrl + '/list';
    return this.http.get<TipoRegistro>(url);
  }

  public addTipoRegistro(tipoRegistro: TipoRegistro): Observable<TipoRegistro> {
    const url = this.baseUrl + '/add';
    return this.http.post<TipoRegistro>(url, tipoRegistro);
  }

  public updateTipoRegistro(tipoRegistro: TipoRegistro): Observable<TipoRegistro> {
    const url = this.baseUrl + '/update';
    return this.http.put<TipoRegistro>(url, tipoRegistro);
  }

  public deleteTipoRegistro(codice: string): Observable<TipoRegistro> {
    const url = this.baseUrl + '/delete/' + codice;
    return this.http.delete<TipoRegistro>(url);
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
