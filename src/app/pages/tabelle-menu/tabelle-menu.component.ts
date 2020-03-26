import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabelle-menu',
  templateUrl: './tabelle-menu.component.html',
  styleUrls: ['./tabelle-menu.component.css']
})
export class TabelleMenuComponent {

  constructor(
    private route: Router
  ) { }

  public goToComponent( nomeComponent: string ): void {

    if( nomeComponent==='')
      this.route.navigate(['/']);
    else if( nomeComponent === 'datiazienda') {
      this.route.navigate(['/ditta']);
    }
    else if( nomeComponent === 'tipiregistro') {
      this.route.navigate(['/tipiregistro']);
    }
    else if( nomeComponent === 'mezzitrasporto') {
      this.route.navigate(['/mezzitrasp']);
    }
    else if( nomeComponent === 'valute') {
      this.route.navigate(['/valute']);
    }
    else if( nomeComponent === 'unitamisura') {
      this.route.navigate(['/unitamisura']);
    }

  }
}
