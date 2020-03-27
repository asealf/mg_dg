import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  utente :string ;

  constructor(
    private route: Router,
  ) { }


  ngOnInit(): void {
  
    this.utente = sessionStorage.getItem('username');
    
  }


  public goToComponent( nomeComponent: string ): void {

    if( nomeComponent==='')
      this.route.navigate(['/']);
    else if( nomeComponent === 'login') {
      this.route.navigate(['/login']);
    }
    else if( nomeComponent === 'logout') {
      
      this.utente = "" ;
      sessionStorage.setItem('username',this.utente);
      sessionStorage.setItem('isauth',"");

    }
    
   
  }

}
