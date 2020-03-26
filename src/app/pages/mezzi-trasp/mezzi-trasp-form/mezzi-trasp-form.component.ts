import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MezziTraspService } from 'src/app/service/mezzi-trasp.service';
import { MezziTrasp } from 'src/app/model/mezzi-trasp'
import { NotifierService } from 'src/app/notifier/notifier.service';

@Component({
  selector: 'app-mezzi-trasp-form',
  templateUrl: './mezzi-trasp-form.component.html',
  styleUrls: ['./mezzi-trasp-form.component.css']
})
export class MezziTraspFormComponent implements OnInit {

  public mezziTrasp: MezziTrasp;

  constructor( 
    private route: Router,
    private mezziTraspService : MezziTraspService,
    private _notifier : NotifierService 
    ) { }

  submitMessage( messaggio:string , tipo:number ) {

    this._notifier.notify(
      messaggio,
      tipo )
  
    }

  ngOnInit(): void {
    this.mezziTrasp = this.mezziTraspService.getter();
  }


  public goToList(): void {
    this.route.navigate(['/mezzitrasp']);
  }

  public addMezziTrasp(): void {

    if ( this.mezziTrasp.codice === undefined ) {
      this.mezziTraspService.addMezziTrasp( this.mezziTrasp ).subscribe( (data)=>{
        this.mezziTrasp = data;
        // alert('Add Mezzo Trasp Success');
        this.submitMessage('Mezzo di trasporto aggiunto' , 1 );

      })
    } else {
      this.mezziTraspService.updateMezziTrasp( this.mezziTrasp).subscribe(( data) => {
        this.mezziTrasp = data;
        // alert('Update Mezzo trasp Success');
        this.submitMessage('Mezzo di trasporto aggiornato' , 1 );

      })
    }
  }
  

}
