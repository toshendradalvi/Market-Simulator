import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Market-Simulator';
  /**
   *
   */
  constructor(public messageService:MessageService) {

  }
  ngOnInit(): void {
    this.messageService.message="Hello from message service";
  }

}
