import { Injectable } from '@angular/core';
import {Message} from '../entities/message';

@Injectable()
export class MessageService {
  messages: Message[] = [];
  messageCounter: number = 0;

  static messageEquality(lhs: Message, rhs: Message) {
    return lhs.content == rhs.content && lhs.type == rhs.type;
  }

  addDangerMessage(message: string) {
    this.addMessage({id: 0, content: message, type: "danger"});
  }

  addSuccessMessage(message: string) {
    this.addMessage({id: 0, content: message, type: "success"});
  }

  addNoticeMessage(message: string) {
    this.addMessage({id: 0, content: message, type: "secondary"});
  }

  deleteMessage(message) {
    const index = this.messages.findIndex((T) => T.id == message.id);
    if(index >= 0) {
      this.messages.splice(index, 1);
    }
  }

  clear() {
    this.messages = [];
  }

  private addMessage(message: Message) {
    this.messageCounter += 1;
    message.id = this.messageCounter;
    const index = this.findMessage(message);
    if(index >= 0) {
      this.messages.splice(index, 1);
    }
    this.messages.push(message);
  }

  private findMessage(message: Message) {
    return this.messages.findIndex((T) => MessageService.messageEquality(T, message));
  }
}
