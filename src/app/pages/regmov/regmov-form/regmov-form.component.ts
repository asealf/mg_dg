import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'
import { RegMovService } from 'src/app/service/regmov.service';
import { RegMov } from 'src/app/model/regmov';
import { RigheMov } from 'src/app/model/righemov';
import { MezziTrasp } from 'src/app/model/mezzi-trasp';
import { MezziTraspService } from 'src/app/service/mezzi-trasp.service';
import { NotifierService } from 'src/app/notifier/notifier.service'; 

@Component({
  selector: 'app-regmov-form',
  templateUrl: './regmov-form.component.html',
  styleUrls: ['./regmov-form.component.css']
})
export class RegMovFormComponent implements OnInit , AfterViewInit {

  public regMov: RegMov;
  public c_righeMov:  RigheMov[]=[];
  public s_righeMov:  RigheMov[]=[];
  public disabilita : boolean = false;

  public mezziTrasp : MezziTrasp;
  public TpOp_Carico : string[] =['','CARICO','INTRODUZIONE','SBARCO'];  
  public TpOp_Scarico : string[] =['','SCARICO','IMBARCO','USCITA'];  


  constructor(
    private route: Router,
    private regMovService : RegMovService,
    private mezziTraspService : MezziTraspService,
    private _notifier : NotifierService ,
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
   this._notifier.notify(
    messaggio,
    tipo )

  }

  ngOnInit(): void {

    this.regMov = this.regMovService.getter();
    this.c_righeMov = this.regMovService.c_righeMov ;
    this.s_righeMov = this.regMovService.s_righeMov ;

  }

  ngAfterViewInit() {
    this.getAllTabelle();
  }


  private getAllTabelle(): any {

    // Legge tabella MezziTrasp
    this.mezziTraspService.getAllMezziTrasp().subscribe((data) => {
      this.mezziTrasp = data;
    });

  }

  public goToList(): void {
    this.route.navigate(['/regmov-list']);
  }

  public addRegMov(): void {

    if ( this.regMov.id === undefined ) {
      this.regMov.id = 0;
      this.regMovService.addRegMov( this.regMov ).subscribe( (data)=>{
        this.regMov = data;
        // alert('Add RegMov Success');
        this.submitMessage('Aggiunto nuovo movimento' , 1);
      })
    } else {
      this.regMovService.updateRegMov( this.regMov).subscribe(( data) => {
        this.regMov = data;
        // alert('Update RegMov Success ') ;
        this.submitMessage('Aggiornato movimento' , 1 );
      })
    }
  }


  public deleteRigaRegMov(id: number): void {

    // cerca riga per id
    let i : number ;

    for(i=0 ; i < this.regMov.righeMovimentiRegistro.length ; i++ ) {

      if( this.regMov.righeMovimentiRegistro[i].id === id ) {
        this.regMov.righeMovimentiRegistro.splice( i , 1 );

        this.regMovService.updateRegMov( this.regMov).subscribe(( data) => {
          this.regMov = data;
          // alert('Update RegMov Success');
          this.submitMessage('Eliminata riga ' , 1 );

        })
    
        this.regMovService.listRighe();
        this.c_righeMov = this.regMovService.c_righeMov ;
        this.s_righeMov = this.regMovService.s_righeMov ;
    
        break;
      }
    }

  }

  public goToUpdateRigaRegMov(rigaMov: RigheMov ): void {
    
    this.regMovService.setRiga(rigaMov);
    this.regMovService.setter( this.regMov );

    this.route.navigate(['/rigamov-list/form']);
  }

  public goToAddRigaRegMov(tipo_riga:string ): void {
    
    const rigaMov: RigheMov = new RigheMov();

    rigaMov.n_operazione = this.regMov.n_operazione ;
    rigaMov.tipo_registro = this.regMov.tipo_registro ;
    rigaMov.tipo_riga = tipo_riga ;


    // this.regMov.righeMovimentiRegistro.push(rigaMov);

    this.regMovService.setRiga( rigaMov );

    this.regMovService.setter( this.regMov );

    this.route.navigate(['/rigamov-list/form']);

  }


}

