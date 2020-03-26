import { Component } from '@angular/core';
import { NotifierService } from './notifier/notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elettra-angular';
  sottoTitolo = "registro movimenti";

  messageText = 'This is a demo notification!';
  messageType = '1';
  constructor(
    private _notifier: NotifierService
  ) { }
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
