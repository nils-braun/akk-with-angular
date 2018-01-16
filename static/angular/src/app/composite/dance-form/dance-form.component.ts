import {Component, Input, OnInit} from '@angular/core';
import {Dance} from '../../entities/dance';
import {Dance} from '../../entities/dance';

@Component({
  selector: 'app-dance-form',
  templateUrl: './dance-form.component.html',
  styleUrls: ['./dance-form.component.css']
})
export class DanceFormComponent implements OnInit {

  @Input() dance: Dance;

  nameAfter: string;

  constructor() { }

  ngOnInit() {
    // todo: get from id
    if(this.dance == null) {
      this.dance = new Dance();
    }
  }

}
