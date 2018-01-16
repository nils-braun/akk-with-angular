import {Component, Input, OnInit, Output} from '@angular/core';
import {Label} from '../../entities/label';

@Component({
  selector: 'app-label-list-view',
  templateUrl: './label-list-view.component.html',
  styleUrls: ['./label-list-view.component.css']
})
export class LabelListViewComponent implements OnInit {

  @Output() @Input() labels: Array<Label>;
  @Input() readonly: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
