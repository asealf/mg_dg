// import { TipoRegistro } from './../../model/tipo-registro';
// import { TipoRegistroService } from './../../service/tipo-registro.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {


  constructor(
    private route: Router,
  ) { }


  public goToComponent( nomeComponent: string ): void {

    if( nomeComponent==='')
      this.route.navigate(['/']);
    else if( nomeComponent === 'regmov-list') {
      this.route.navigate(['/regmov/list']);
    }
    else if( nomeComponent === 'regmov-stampa') {
      this.route.navigate(['/regmov/stampa']);
    }
    else if( nomeComponent === 'datiazienda') {
      this.route.navigate(['/datiazienda']);
    }
    else if( nomeComponent === 'tipiregistro') {
      this.route.navigate(['/tipiregistro']);
    }
    else if( nomeComponent === 'mezzitrasporto') {
      this.route.navigate(['/mezzitrasporto']);
    }
    else if( nomeComponent === 'valute') {
      this.route.navigate(['/valute']);
    }
    else if( nomeComponent === 'unitamisura') {
      this.route.navigate(['/unitamisura']);
    }

  }

}
