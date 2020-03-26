import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RegMovService } from 'src/app/service/regmov.service';
import { RegMov } from 'src/app/model/regmov';
import { RigheMov } from 'src/app/model/righemov';
import { UnitaMisura} from 'src/app/model/unita-misura';
import { UnitaMisuraService} from 'src/app/service/unita-misura.service';
import { Valute } from 'src/app/model/valute';
import { ValuteService } from 'src/app/service/valute.service';   
import { NotifierService } from 'src/app/notifier/notifier.service'; 


@Component({
  selector: 'app-righemov-form',
  templateUrl: './righemov-form.component.html',
  styleUrls: ['./righemov-form.component.css']
})
export class RigheMovFormComponent implements OnInit {

  public rigaMov: RigheMov;
  private regMov: RegMov;
  public unitaMisura : UnitaMisura ;
  public valute : Valute ;

  constructor(
    private route: Router,
    private regMovService : RegMovService ,
    private unitaMisuraService : UnitaMisuraService ,
    private valuteService : ValuteService ,
    private _notifier : NotifierService 
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
    
    this._notifier.notify(
     messaggio,
     tipo 
     )
 
   }


  ngOnInit(): void {
    this.rigaMov = this.regMovService.getRiga();

      // Legge tabella UnitaMisura
      this.unitaMisuraService.getAllUnitaMisura().subscribe((data) => {
        this.unitaMisura = data;
      });

      // Legge tabella Valute
      this.valuteService.getAllValute().subscribe((data) => {
        this.valute = data;

      });
  
  }

  public goToForm(): void {
    this.route.navigate(['/regmov-list/form']);
  }

  public addRigaRegMov(): void {

    let i:number;

    this.regMov = this.regMovService.getter();


    if ( this.rigaMov.id === undefined ) {

      this.rigaMov.id = 0 ;

      this.regMov.righeMovimentiRegistro.push( this.rigaMov );

      this.regMovService.addRegMov( this.regMov ).subscribe( (data)=>{
        this.regMov = data;

        // this.regMovService.regMov = this.regMov;
        this.regMovService.setter( this.regMov );
        
        //alert('Add RigaRegMov Success');
        this.submitMessage('Riga aggiunta', 1 );

        this.route.navigate(['/regmov-list/form']);

      })

    } else {

      // cerca riga 
      for( i=0 ; i < this.regMov.righeMovimentiRegistro.length ; i++ ) {
        if( this.regMov.righeMovimentiRegistro[i].id === this.rigaMov.id ) {
          // trovata riga da aggiornare
          this.regMov.righeMovimentiRegistro[i] = this.rigaMov ;

          this.regMovService.updateRegMov( this.regMov).subscribe(( data) => {
            this.regMov = data;
            // alert('Update RigaRegMov Success');
            this.submitMessage('Riga aggiornata' , 1 );
          })

          break;

        }

      }

      this.route.navigate(['/regmov-list/form']);
    }


    

  }  

}
