import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ditta } from './../../model/ditta';
import { DittaService } from './../../service/ditta.service';
import { NotifierService } from 'src/app/notifier/notifier.service'; 


@Component({
  selector: 'app-ditta',
  templateUrl: './ditta.component.html',
  styleUrls: ['./ditta.component.css']
})

export class DittaComponent implements OnInit {

  public ditta:Ditta  = new Ditta();

  constructor(
    private route: Router,
    private dittaService: DittaService ,  
    private _notifier : NotifierService
  ) { 

    this.getAllDitta();

  }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   } 


  ngOnInit(): void {
    
    // this.dittaService.getter();

  }

 
  private getAllDitta(): any {
    this.dittaService.getDitta().subscribe((data) => {
      this.ditta = data;

     // alert('dittaComponent getAllDitta ditta='+JSON.stringify( this.ditta ) );

      this.dittaService.setter( this.ditta );

    });
  }

  public deleteDitta(codice: string): void {
    /*
    this.dittaService.deleteDitta(codice).subscribe(() => {
      alert('Delete Ditta Success');
      this.getAllDitta();
    });
    */
  }

  public goToAddDitta(): void {
    const ditta: Ditta = new Ditta();
    this.dittaService.setter(ditta);
    this.route.navigate(['/ditta/form']);
  }

  public goToUpdateDitta(ditta: Ditta): void {
    this.dittaService.setter(ditta);
    this.route.navigate(['/ditta/form']);
  }

  public goToIndex(): void {
    this.route.navigate(['/']);

  }


  /********** 

  public goToIndex(): void {
    this.route.navigate(['/']);
  }
 

  private getAllDitta(): any {
    this.dittaService.getAllDitta().subscribe((data) => {
      this.ditta = data;
      alert('dittaComponent getAllDitta ditta=' + JSON.stringify( this.ditta ) );
    });
  }

  */

  public addDitta(): void {
    /*
    if ( this.ditta.id === undefined ) {
      this.dittaService.addDitta( this.ditta ).subscribe( (data)=>{
        this.ditta = data;
        alert('Add Ditta Success');
      })
    } else {
    */
      this.dittaService.updateDitta( this.ditta).subscribe(( data) => {
        this.ditta = data;
        // alert('Update Ditta Success');
        this.submitMessage('Dati diita aggiornati' , 1 );
      })
    
    // }
  }



}
