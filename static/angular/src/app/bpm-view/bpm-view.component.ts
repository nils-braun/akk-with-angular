import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bpm-view',
  templateUrl: './bpm-view.component.html',
  styleUrls: ['./bpm-view.component.css']
})
export class BpmViewComponent implements OnInit {

  @Input() bpm: number;

  constructor() { }

  ngOnInit() {
  }

}
