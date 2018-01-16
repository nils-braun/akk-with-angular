import {Component, Input, OnInit, Output} from '@angular/core';
import {Label} from '../../entities/label';

@Component({
  selector: 'app-label-view',
  templateUrl: './label-view.component.html',
  styleUrls: ['./label-view.component.css']
})
export class LabelViewComponent implements OnInit {

  @Output() @Input() label: Label;
  @Input() readonly : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
