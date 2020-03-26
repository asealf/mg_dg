import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TipoRegistroService } from 'src/app/service/tipo-registro.service';
import { TipoRegistro } from 'src/app/model/tipo-registro'
import { NotifierService } from 'src/app/notifier/notifier.service'; 

@Component({
  selector: 'app-tipi-registro-form',
  templateUrl: './tipi-registro-form.component.html',
  styleUrls: ['./tipi-registro-form.component.css']
})
export class TipiRegistroFormComponent implements OnInit {

  public tipoRegistro: TipoRegistro;

  constructor(
    private route: Router,
    private tipoRegistroService : TipoRegistroService,
    private _notifier : NotifierService 
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }

  ngOnInit(): void {
    this.tipoRegistro = this.tipoRegistroService.getter();
  }

  public goToList(): void {
    this.route.navigate(['/tipiregistro']);
  }

  public addTipoRegistro(): void {

    if ( this.tipoRegistro.codice === undefined ) {
      this.tipoRegistroService.addTipoRegistro( this.tipoRegistro ).subscribe( (data)=>{
        this.tipoRegistro = data;
        // alert('Add TipoRegistro Success');
        this.submitMessage('Tipo registro aggiunto' , 1 );
      })
    } else {
      this.tipoRegistroService.updateTipoRegistro( this.tipoRegistro).subscribe(( data) => {
        this.tipoRegistro = data;
        // alert('Update Tipo Registro Success');
        this.submitMessage('Tipo registro aggiornato' , 1 );
      })
    }
  }
  
}

