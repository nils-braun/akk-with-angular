import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Message} from '../../entities/message';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-alert-view',
  animations: [
    trigger('visibilityChanged', [
      state("false", style({ opacity: 1 })),
      state("true", style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ],
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.css']
})
export class AlertViewComponent implements OnInit {
  @Input() message : Message;
  @ViewChild("messageElement") messageElement;
  fading: boolean = false;

  constructor(private messageService : MessageService) { }

  ngOnInit() {
    setTimeout(() => this.fading = true, 2500);
    setTimeout(() => {
      console.log(this.messageService.messages);
      this.messageService.deleteMessage(this.message);
      }, 3000);
  }

}
