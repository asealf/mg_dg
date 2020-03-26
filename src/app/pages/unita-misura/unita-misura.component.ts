import { Component, OnInit , AfterViewInit } from '@angular/core';
import { UnitaMisura } from './../../model/unita-misura';
import { UnitaMisuraService } from './../../service/unita-misura.service';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/notifier/notifier.service'; 

@Component({
  selector: 'app-unita-misura',
  templateUrl: './unita-misura.component.html',
  styleUrls: ['./unita-misura.component.css']
})
export class UnitaMisuraComponent implements OnInit {

  public unitaMisura:UnitaMisura;
  
  constructor(
    private route: Router,
    private unitaMisuraService: UnitaMisuraService ,
    private _notifier : NotifierService 
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }

  
  ngOnInit(): void {
    this.unitaMisuraService.getter();
  }

  ngAfterViewInit() {
    this.getAllUnitaMisura();
  }

  private getAllUnitaMisura(): any {
    this.unitaMisuraService.getAllUnitaMisura().subscribe((data) => {
      this.unitaMisura = data;
    });
  }

  public deleteUnitaMisura(codice: string): void {
    this.unitaMisuraService.deleteUnitaMisura(codice).subscribe(() => {
      // alert('Delete UnitaMisura Success');
      this.submitMessage('Unità di misura eliminata' , 1 );
      this.getAllUnitaMisura();
    });
  }

  public goToAddUnitaMisura(): void {
    const unitaMisura: UnitaMisura = new UnitaMisura();
    this.unitaMisuraService.setter(unitaMisura);
    this.route.navigate(['/unitamisura/form']);
  }

  public goToUpdateUnitaMisura(unitaMisura: UnitaMisura): void {
    this.unitaMisuraService.setter(unitaMisura);
    this.route.navigate(['/unitamisura/form']);
  }

  public goToIndex(): void {
    this.route.navigate(['/']);

  }

}
