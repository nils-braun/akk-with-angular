import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bpm-view',
  templateUrl: './bpm-view.component.html',
  styleUrls: ['./bpm-view.component.css']
})
export class BpmViewComponent implements OnInit {

  @Output() @Input() bpm: number;
  @Input() readonly : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
