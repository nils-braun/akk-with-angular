import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';

@Component({
  selector: 'app-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingViewComponent),
    multi: true
} ]
})
export class RatingViewComponent extends ValueAccessor<number> implements OnInit  {
  @Input() readonly = true;
  @Input() labelText = 'Rating';

  resetRating() {
    this.value = 0;
  }

  ngOnInit() { }
}
