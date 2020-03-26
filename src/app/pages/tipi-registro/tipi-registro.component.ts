import { Component, OnInit , AfterViewInit } from '@angular/core';
import { TipoRegistro } from './../../model/tipo-registro';
import { TipoRegistroService } from './../../service/tipo-registro.service';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/notifier/notifier.service'; 


@Component({
  selector: 'app-tipi-registro',
  templateUrl: './tipi-registro.component.html',
  styleUrls: ['./tipi-registro.component.css']
})

export class TipiRegistroComponent implements OnInit , AfterViewInit {

  public tipoRegistro:TipoRegistro;

  constructor(
    private route: Router,
    private tipoRegistroService: TipoRegistroService ,
    private _notifier : NotifierService 
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }

  ngOnInit(): void {
    this.tipoRegistroService.getter();
  }

  ngAfterViewInit() {
    this.getAllTipoRegistro();
  }

  private getAllTipoRegistro(): any {
    this.tipoRegistroService.getAllTipoRegistro().subscribe((data) => {
      this.tipoRegistro = data;
    });
  }

  public deleteTipoRegistro(codice: string): void {
    this.tipoRegistroService.deleteTipoRegistro(codice).subscribe(() => {
      // alert('Delete TipoRegistro Success');
      this.submitMessage('Tipo registro eliminato' , 1 );
      this.getAllTipoRegistro();
    });
  }

  public goToAddTipoRegistro(): void {
    const tipoRegistro: TipoRegistro = new TipoRegistro();
    this.tipoRegistroService.setter(tipoRegistro);
    this.route.navigate(['/tipiregistro/form']);
  }

  public goToUpdateTipoRegistro(tipoRegistro: TipoRegistro): void {
    this.tipoRegistroService.setter(tipoRegistro);
    this.route.navigate(['/tipiregistro/form']);
  }

  public goToIndex(): void {
    this.route.navigate(['/']);

  }
}
