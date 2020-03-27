import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { User } from './../../model/user';
import { NotifierService } from 'src/app/notifier/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userLogin = { utente: "" , password : ""};
  utente = "";
  password = "";
  invalidLogin = false ;
  
  public user : User ;

  constructor(
    private route: Router,
    private userService: UserService ,
    private _notifier : NotifierService  
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }


  ngOnInit(): void {

  }

  public Autentica( ) {
    
    this.userService.authenticate( this.utente , this.password )
      .subscribe( (data) =>{
        this.user = data;
        this.invalidLogin = false ;
        this.submitMessage("Ok .. "+this.user.status , 1 );
        this.route.navigate(['/']);
       }
       ,
        error => {
          this.invalidLogin = true  ;
          this.submitMessage('Errore !! Nome utente o password errati' , 2);
        }
        
      );


   
  }

}
