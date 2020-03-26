import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MezziTrasp } from './../../model/mezzi-trasp';
import { MezziTraspService } from './../../service/mezzi-trasp.service';
import { NotifierService } from 'src/app/notifier/notifier.service';

@Component({
  selector: 'app-mezzi-trasp',
  templateUrl: './mezzi-trasp.component.html',
  styleUrls: ['./mezzi-trasp.component.css']
})
export class MezziTraspComponent implements OnInit , AfterViewInit {

  public mezziTrasp:MezziTrasp;

  constructor(
    private route: Router,
    private mezziTraspService: MezziTraspService,
    private _notifier : NotifierService    
  ) { }

  submitMessage( messaggio:string , tipo:number ) {
  
    this._notifier.notify(
     messaggio,
     tipo )
 
   }

  ngOnInit(): void {
    this.mezziTraspService.getter();
  }

  ngAfterViewInit() {
    this.getAllMezziTrasp();
  }

  private getAllMezziTrasp(): any {
    this.mezziTraspService.getAllMezziTrasp().subscribe((data) => {
      this.mezziTrasp = data;
    });
  }

  public deleteMezziTrasp(codice: string): void {
    this.mezziTraspService.deleteMezziTrasp(codice).subscribe(() => {
      //alert('Delete MezziTrasp Success');
      this.submitMessage('Mezzo di trasporto eliminato' , 1 );
      this.getAllMezziTrasp();
    });
  }

  public goToAddMezziTrasp(): void {
    const mezziTrasp: MezziTrasp = new MezziTrasp();
    this.mezziTraspService.setter(mezziTrasp);
    this.route.navigate(['/mezzitrasp/form']);
  }

  public goToUpdateMezziTrasp(mezziTrasp: MezziTrasp): void {
    this.mezziTraspService.setter(mezziTrasp);
    this.route.navigate(['/mezzitrasp/form']);
  }

  public goToIndex(): void {
    this.route.navigate(['/']);

  }


}
