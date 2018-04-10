import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-messages-view',
  templateUrl: './messages-view.component.html',
  styleUrls: ['./messages-view.component.css']
})
export class MessagesViewComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
