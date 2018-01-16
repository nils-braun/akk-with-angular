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
  @Input() rating: number;
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Rating";

  ngOnInit() {
    if(this.rating != null) {
      this.value = this.rating;
    }
  }
}
