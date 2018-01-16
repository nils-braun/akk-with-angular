import {Component, Input, OnInit, Output} from '@angular/core';
import {Dance} from '../../entities/dance';
import {Artist} from '../../entities/artist';

@Component({
  selector: 'app-dance-view',
  templateUrl: './dance-view.component.html',
  styleUrls: ['./dance-view.component.css']
})
export class DanceViewComponent implements OnInit {

  @Input() @Output() dance : Dance;
  @Input() readonly : boolean = true;
  @Input() labelText : string = "Dance";

  constructor() { }

  ngOnInit() {
    if(this.dance == null) {
      this.dance = new Dance();
    }
  }

}
