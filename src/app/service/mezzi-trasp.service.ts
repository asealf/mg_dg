import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MezziTrasp } from './../model/mezzi-trasp';

@Injectable({
  providedIn: 'root'
})
export class MezziTraspService {

  private baseUrl: any = 'http://localhost:8080/mezzitrasporto';
  public mezziTrasp: MezziTrasp = new MezziTrasp();

  constructor(private http: HttpClient) { }

  public getAllMezziTrasp(): Observable<MezziTrasp> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/list';
    return this.http.get<MezziTrasp>(url,{headers});
  }

  public addMezziTrasp(mezziTrasp: MezziTrasp): Observable<MezziTrasp> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/add';
    return this.http.post<MezziTrasp>(url, mezziTrasp ,{headers});
  }

  public updateMezziTrasp(mezziTrasp: MezziTrasp): Observable<MezziTrasp> {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/update';
    return this.http.put<MezziTrasp>(url, mezziTrasp,{ headers});
  }

  public deleteMezziTrasp(codice: string): Observable<MezziTrasp> {
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + 
    btoa( sessionStorage.getItem('isauth') )  });

    const url = this.baseUrl + '/delete/' + codice;
    return this.http.delete<MezziTrasp>(url,{ headers} );
  }

  // Return assigned variable product
  getter() {
    return this.mezziTrasp;
  }

  // Set Value into variable product
  setter(mezziTrasp: MezziTrasp) {
    this.mezziTrasp = mezziTrasp;
  }

}

