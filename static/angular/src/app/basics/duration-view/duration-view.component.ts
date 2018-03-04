import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';

@Component({
  selector: 'app-duration-view',
  templateUrl: './duration-view.component.html',
  styleUrls: ['./duration-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationViewComponent),
    multi: true
} ]
})
export class DurationViewComponent extends ValueAccessor<number> implements OnInit  {
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Duration";

  ngOnInit() { }

  set minutes(minutes) {
    this.value = 60 * minutes + this.seconds;
  }

  set seconds(seconds) {
    this.value = 60 * this.minutes + seconds;
  }

  get minutes() {
    return Math.round(this.value / 60)
  }

  get minuteString() {
    return this.minutes.toString().padStart(2, "0")
  }

  get seconds() {
    return this.value % 60
  }

  get secondString() {
    return this.seconds.toString().padStart(2, "0")
  }
}
