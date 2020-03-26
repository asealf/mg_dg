import { Component, OnInit } from '@angular/core';
import { RegMov } from './../../model/regmov';
import { RegMovService } from './../../service/regmov.service';
import { Router } from '@angular/router';
import { TipoRegistro } from './../../model/tipo-registro' ;
import { TipoRegistroService  } from './../../service/tipo-registro.service';  
import { FiltroMovReg } from './../../model/filtro-mov-reg' ;
import { NotifierService } from 'src/app/notifier/notifier.service'; 

@Component({
  selector: 'app-stampamov',
  templateUrl: './stampamov.component.html',
  styleUrls: ['./stampamov.component.css']
})
export class StampamovComponent implements OnInit {

  public regMov:RegMov;

  public datiFiltro : FiltroMovReg ;
  public optionRegistro : TipoRegistro ; 
  constructor(
    private route: Router,
    private regMovService: RegMovService,
    private tipoRegistroService : TipoRegistroService,
    private _notifier : NotifierService 
  ) { 
    this.datiFiltro = JSON.parse( sessionStorage.getItem('datiFiltro') ) ;

    if( this.datiFiltro === null ){
      this.datiFiltro = new FiltroMovReg();

      sessionStorage.setItem( 'datiFiltro' , JSON.stringify( this.datiFiltro )  );
    }
  }

  submitMessage( messaggio:string , tipo:number ) {
    
    this._notifier.notify(
     messaggio,
     tipo 
     )
 
   }

  ngOnInit(): void {
    this.getAllRegMov();

    this.regMovService.getter();

  }

  private getAllRegMov(): any {

    this.tipoRegistroService.getAllTipoRegistro().subscribe( (data) =>{
      this.optionRegistro = data;
      
      if( this.datiFiltro.tipoReg === undefined ){
        this.datiFiltro.tipoReg = this.optionRegistro[0].codice ; 

        var d = new Date();
        var anno = d.getFullYear();
  
        this.datiFiltro.DallaData = anno+'-01-01' ;
        this.datiFiltro.AllaData = anno+'-12-31' ;
  
        sessionStorage.setItem( 'datiFiltro' , JSON.stringify(this.datiFiltro ) );

      }       
        
    });

  }


  public goToIndex(): void {
    this.route.navigate(['/']);

  }  

  public Stampa( datiFiltro:FiltroMovReg){

    this.submitMessage('Avvia stampa registro ', 1 );

    this.regMovService.stampaMov( datiFiltro.tipoReg ,
      datiFiltro.DallaData, datiFiltro.AllaData, 'N' ).subscribe( (data) => {
        
        // alert( 'stampaMov component dentro subscribe');

        var file = new Blob([data], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);

        // if you want to open PDF in new tab
        window.open(fileURL); 

        var a         = document.createElement('a');
        a.href        = fileURL; 
        a.target      = '_blank';
        a.download    = 'registro.pdf';
        document.body.appendChild(a);
        a.click();
      },
      (error) => {
        
        alert('stampaMov componenet error: '+error );
      }
    );
       
  }

}
