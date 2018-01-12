import {Component, Input, OnInit} from '@angular/core';
import {Label} from '../../entities/label';

@Component({
  selector: 'app-label-view',
  templateUrl: './label-view.component.html',
  styleUrls: ['./label-view.component.css']
})
export class LabelViewComponent implements OnInit {

  @Input() label: Label;

  constructor() { }

  ngOnInit() {
  }

}
