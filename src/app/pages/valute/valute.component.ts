import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Valute } from './../../model/valute';
import { ValuteService } from './../../service/valute.service';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/notifier/notifier.service'; 

@Component({
  selector: 'app-valute',
  templateUrl: './valute.component.html',
  styleUrls: ['./valute.component.css']
})
export class ValuteComponent implements OnInit , AfterViewInit  {

  public valute:Valute;

  constructor(
    private route: Router,
    private valuteService: ValuteService ,
    private _notifier : NotifierService   
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }

  ngOnInit(): void {
    this.valuteService.getter();
  }

  ngAfterViewInit() {
    this.getAllValute();
  }

  private getAllValute(): any {
    this.valuteService.getAllValute().subscribe((data) => {
      this.valute = data;
    });
  }

  public deleteValute(codice: string): void {
    this.valuteService.deleteValute(codice).subscribe(() => {
      // alert('Delete Valute Success');
      this.submitMessage('Valuta eliminata' , 1);
      this.getAllValute();
    });
  }

  public goToAddValute(): void {
    const valute: Valute = new Valute();
    this.valuteService.setter(valute);
    this.route.navigate(['/valute/form']);
  }

  public goToUpdateValute(valute: Valute): void {
    this.valuteService.setter(valute);
    this.route.navigate(['/valute/form']);
  }

  public goToIndex(): void {
    this.route.navigate(['/']);

  }

}
