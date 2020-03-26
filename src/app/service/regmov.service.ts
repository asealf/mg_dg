import { Injectable } from '@angular/core';
import { RegMov } from './../model/regmov';
import { RigheMov } from 'src/app/model/righemov';
import { FiltroMovReg } from 'src/app/model/filtro-mov-reg' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegMovService {

  private baseUrl: any = 'http://localhost:8080/movimentiregistro';
  public regMov: RegMov = new RegMov();
  public rigaMov : RigheMov ;
  public c_righeMov:  RigheMov[]=[];
  public s_righeMov:  RigheMov[]=[];
  public datiFiltro : FiltroMovReg = new FiltroMovReg();

  constructor(private http: HttpClient) { }


  public getAllRegMov(): Observable<RegMov> {
    const url = this.baseUrl + '/list';
    return this.http.get<RegMov>(url);
  }

  public getByTipoRegAndDataRegMov(tiporeg:string , data_ini:string, 
      data_fine:string ): Observable<RegMov> {
    const url = this.baseUrl + '/list_tp_dt/'+tiporeg+'/'+
      data_ini+'/'+data_fine+'/0/10';
      
    return this.http.get<RegMov>(url);
  }


  public addRegMov(regMov: RegMov): Observable<RegMov> {
    const url = this.baseUrl + '/add';
    return this.http.post<RegMov>(url, regMov);
  }

  public updateRegMov(regMov: RegMov): Observable<RegMov> {
    const url = this.baseUrl + '/update';
    return this.http.put<RegMov>(url, regMov);
  }

  public deleteRegMov(id: number): Observable<RegMov> {
    const url = this.baseUrl + '/delete/' + id;
    return this.http.delete<RegMov>(url);
  }

  public findNextN_operazione(): Observable<number>{
    const url = this.baseUrl + '/next_nop';
    return this.http.get<number>(url);
  }

  public stampaMov(tiporeg:string , data_ini:string, 
    data_fine:string , definitivo:string ): Observable <Blob> {

    const url = this.baseUrl + '/pdfreport/'+tiporeg+'/'+
      data_ini+'/'+data_fine+'/'+definitivo;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      responseType : 'blob'});

    // alert('stampNov service url='+url);

    return this.http.get<Blob>(url , { headers : headers,responseType : 
      'blob' as 'json'});

  }

  // Return assigned variable Regmov
  getter() {

    this.listRighe();

    return this.regMov;

  }

  // Set Value into variable RegMov
  setter(regMov: RegMov) {
    this.regMov = regMov;
  }  

  // Return assigned variable product
  getRiga() {
    return this.rigaMov ;
  }

  // Set Value into variable product
  setRiga(rigaMov: RigheMov ) {
    this.rigaMov = rigaMov;
  }  

  listRighe() : void { 
    
    let i:number;
    this.c_righeMov.length = 0 ;
    this.s_righeMov.length = 0 ;


      for( i=0 ; i<this.regMov.righeMovimentiRegistro.length ; i++){
  
        if( this.regMov.righeMovimentiRegistro[i].tipo_riga == "C" ){

          this.c_righeMov.push( this.regMov.righeMovimentiRegistro[i] ); 

        } else {

          this.s_righeMov.push( this.regMov.righeMovimentiRegistro[i] ); 

        }

      }

  }

  /*
  getterDatiFiltro():FiltroMovReg{
    return this.datiFiltro;
  }

  setterDatiFiltro( datiFiltro: FiltroMovReg ){
    this.datiFiltro = datiFiltro;
  }
*/
}