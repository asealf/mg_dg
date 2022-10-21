import { Component } from '@angular/core';
import { NotifierService } from './notifier/notifier.service';
import { SharedService } from './service/shared.service'
import ConfigJson from '../assets/config.json';

interface CONFIGJSON {
  base_url: string;
  demo :number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movimenti-magazzino-dogana';
  sottoTitolo = "registro movimenti";

  BaseUrl: CONFIGJSON = ConfigJson ;
  // public shr : SharedService ;

  messageText = 'This is a demo notification!';
  messageType = '1';
  constructor(
    private _notifier: NotifierService,
    private shr:SharedService
  ) { 
    console.log(this.BaseUrl);

    this.shr.setBaseUrl( this.BaseUrl.base_url );

  }
  submitMessage() {
    let messageType: number = null;
    if (this.messageType.length > 0) {
      messageType = parseInt(this.messageType);
    }
    this._notifier.notify(
      this.messageText,
      messageType,
    )
  }
}
