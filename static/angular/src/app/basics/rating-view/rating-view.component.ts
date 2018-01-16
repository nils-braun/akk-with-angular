import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.css']
})
export class RatingViewComponent implements OnInit {

  @Output() @Input() rating: number;
  @Input() readonly: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
