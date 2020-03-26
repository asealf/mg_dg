import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UnitaMisuraService } from 'src/app/service/unita-misura.service';
import { UnitaMisura } from 'src/app/model/unita-misura';
import { NotifierService } from 'src/app/notifier/notifier.service'; 

@Component({
  selector: 'app-unita-misura-form',
  templateUrl: './unita-misura-form.component.html',
  styleUrls: ['./unita-misura-form.component.css']
})
export class UnitaMisuraFormComponent implements OnInit {

  public unitaMisura: UnitaMisura;

  constructor(
    private route: Router,
    private unitaMisuraService : UnitaMisuraService,
    private _notifier : NotifierService 
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }


  ngOnInit(): void {
    this.unitaMisura = this.unitaMisuraService.getter();
  }


  public goToList(): void {
    this.route.navigate(['/unitamisura']);
  }

  public addUnitaMisura(): void {

    if ( this.unitaMisura.codice === undefined ) {
      this.unitaMisuraService.addUnitaMisura( this.unitaMisura ).subscribe( (data)=>{
        this.unitaMisura = data;
        // alert('Add Unita misura Success');
        this.submitMessage('Unità di misura aggiunta' , 1 );
      })
    } else {
      this.unitaMisuraService.updateUnitaMisura( this.unitaMisura).subscribe(( data) => {
        this.unitaMisura = data;
        // alert('Update Unita misura Success');
        this.submitMessage('Unità di misura aggiornata' , 1 );
      })
    }
  }
  
}
