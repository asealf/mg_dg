import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ValuteService } from 'src/app/service/valute.service';
import { Valute } from 'src/app/model/valute';
import { NotifierService } from 'src/app/notifier/notifier.service';

@Component({
  selector: 'app-valute-form',
  templateUrl: './valute-form.component.html',
  styleUrls: ['./valute-form.component.css']
})
export class ValuteFormComponent implements OnInit {

  public valute: Valute;

  constructor(
    private route: Router,
    private valuteService : ValuteService,
    private _notifier : NotifierService  
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }

  ngOnInit(): void {
    this.valute = this.valuteService.getter();
  }

  public goToList(): void {
    this.route.navigate(['/valute']);
  }

  public addValute(): void {

    if ( this.valute.codice === undefined ) {
      this.valuteService.addValute( this.valute ).subscribe( (data)=>{
        this.valute = data;
        // alert('Add Valuta Success');
        this.submitMessage('Valuta aggiunta' , 1);
      })
    } else {
      this.valuteService.updateValute( this.valute).subscribe(( data) => {
        this.valute = data;
        // alert('Update Valuta Success');
        this.submitMessage('Valuta aggiornata' , 1);
      })
    }
  }

}
