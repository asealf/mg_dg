import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: any = 'http://localhost:8080';
  public User = new User();

  constructor(private http: HttpClient) { }


  authenticate(username:string, password : string) {

    const str = username + ':' + password ;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(str)  });
    
    sessionStorage.setItem('isauth',str);

    return this.http.get<User>( this.baseUrl+'/validateLogin',{headers}).pipe(
    map(
      userData => {
        sessionStorage.setItem('username',username);
        return userData;
      }
    ));   
    
  }

}
