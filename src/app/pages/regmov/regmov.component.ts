import { Component, OnInit , AfterViewInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { RegMov } from './../../model/regmov';
import { RegMovService } from './../../service/regmov.service';
import { Router } from '@angular/router';
import { TipoRegistro } from './../../model/tipo-registro' ;
import { TipoRegistroService  } from './../../service/tipo-registro.service';  
import { FiltroMovReg } from './../../model/filtro-mov-reg' ;
import { NotifierService } from 'src/app/notifier/notifier.service'; 


@Component({
  selector: 'app-regmov',
  templateUrl: './regmov.component.html',
  styleUrls: ['./regmov.component.css']
})
export class RegMovComponent implements OnInit {

  public regMov : RegMov[] ; 
  /*
  public rgm_arr : RegMov[]; 
  public regMovPg : RegMov[]  ;
  */

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

      this.datiFiltro.tipoReg = undefined ;
      this.datiFiltro.DallaData = '2020-01-01';
      this.datiFiltro.AllaData = '2020-12-31';
      this.datiFiltro.page = 1 ;
      this.datiFiltro.pageSize = 5;
      this.datiFiltro.sizeItem = 0 ;

      sessionStorage.setItem( 'datiFiltro' , JSON.stringify( this.datiFiltro )  );
    }
    if( this.datiFiltro.page === undefined ){
      this.datiFiltro.page = 1;
      this.datiFiltro.pageSize = 5;
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
        this.datiFiltro.page = 1;
        this.datiFiltro.pageSize = 5;
        this.datiFiltro.sizeItem = 0;
    
        sessionStorage.setItem( 'datiFiltro' , JSON.stringify(this.datiFiltro ) );

      }
        
      if( this.datiFiltro.tipoReg !== undefined ){
        this.EseguiFiltro( this.datiFiltro );
      }
        
    });

  }

  public deleteRegMov(id: number): void {
    this.regMovService.deleteRegMov(id).subscribe(() => {
      this.submitMessage('Movimento eliminato', 1 );
      this.getAllRegMov();
    });
  }

  public goToAddRegMov(): void {
    const regMov: RegMov = new RegMov();

    // Legge prossimo numero operazione
    this.regMovService.findNextN_operazione().subscribe( (data) => {
      regMov.n_operazione = data ;
      this.getAllRegMov();
    });

    regMov.tipo_registro = this.datiFiltro.tipoReg ;
    regMov.data_immissione = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.regMovService.setter(regMov);
    this.route.navigate(['/regmov-list/form']);

  }

  public goToUpdateRegMov(regMov: RegMov): void {
    this.regMovService.setter(regMov);

    sessionStorage.setItem( 'datiFiltro' , JSON.stringify( this.datiFiltro )  );

    this.route.navigate(['/regmov-list/form']);
  }

  public goToIndex(): void {
    this.route.navigate(['/']);

  }  

  public EseguiFiltro( datiFiltro:FiltroMovReg ){

    this.regMovService.getByTipoRegAndDataRegMov( datiFiltro.tipoReg , 
      datiFiltro.DallaData , datiFiltro.AllaData ).subscribe((data) => {

      // this.regMov = data;
      this.regMov = JSON.parse( JSON.stringify( data ) )

      this.datiFiltro.sizeItem = this.regMov.length;

      sessionStorage.setItem( 'datiFiltro' , JSON.stringify( this.datiFiltro )  );

    });

  }

  public ViewData( dt : string ):string{
      
      return( dt.substr(8,2) + '-' + dt.substr(5,2) + '-' + dt.substr(0,4) );
  }


}
