import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../model/user';
import { SharedService } from '../service/shared.service'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public User = new User();
  public baseUrl : string ;

  constructor(private http: HttpClient , private shr:SharedService) { 
    this.baseUrl = this.shr.getBaseUrl();
    console.log("user.service baseUrl:"+this.baseUrl);
  }


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
