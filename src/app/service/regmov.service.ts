import { Injectable } from '@angular/core';
import { RegMov } from './../model/regmov';
import { RigheMov } from 'src/app/model/righemov';
import { FiltroMovReg } from 'src/app/model/filtro-mov-reg' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../service/shared.service'

@Injectable({
  providedIn: 'root'
})
export class RegMovService {

  public baseUrl : string ;
  // private baseUrl: any = 'http://localhost:8080/movimentiregistro';
  public regMov: RegMov = new RegMov();
  public rigaMov : RigheMov ;
  public c_righeMov:  RigheMov[]=[];
  public s_righeMov:  RigheMov[]=[];
  public datiFiltro : FiltroMovReg = new FiltroMovReg();

  constructor(private http: HttpClient , private shr:SharedService) { 
    this.baseUrl = this.shr.getBaseUrl()+'/movimentiregistro';
  }


  public getAllRegMov(): Observable<RegMov> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/list';
    return this.http.get<RegMov>(url ,{headers} );
  }

  public getByTipoRegAndDataRegMov(tiporeg:string , data_ini:string, 
      data_fine:string ): Observable<RegMov> {

        const headers = new HttpHeaders({ Authorization: 'Basic ' + 
        btoa( sessionStorage.getItem('isauth') )  });
    
        const url = this.baseUrl + '/list_tp_dt/'+tiporeg+'/'+
      data_ini+'/'+data_fine+'/0/10';
      
    return this.http.get<RegMov>(url ,{headers} );
  }


  public addRegMov(regMov: RegMov): Observable<RegMov> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/add';
    return this.http.post<RegMov>(url, regMov ,{headers} );
  }

  public updateRegMov(regMov: RegMov): Observable<RegMov> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/update';
    return this.http.put<RegMov>(url, regMov ,{headers} );
  }

  public deleteRegMov(id: number): Observable<RegMov> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/delete/' + id;
    return this.http.delete<RegMov>(url ,{headers} );
  }

  public findNextN_operazione(): Observable<number>{

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/next_nop';
    return this.http.get<number>(url ,{headers} );
  }

  public stampaMov(tiporeg:string , data_ini:string, 
    data_fine:string , definitivo:string ): Observable <Blob> {
  
    const url = this.baseUrl + '/pdfreport/'+tiporeg+'/'+
      data_ini+'/'+data_fine+'/'+definitivo;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      responseType : 'blob' ,  Authorization: 'Basic ' + 
      btoa( sessionStorage.getItem('isauth')) });

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

}


