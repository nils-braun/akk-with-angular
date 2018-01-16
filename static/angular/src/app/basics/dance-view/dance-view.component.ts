import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';

@Component({
  selector: 'app-dance-view',
  templateUrl: './dance-view.component.html',
  styleUrls: ['./dance-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DanceViewComponent),
    multi: true
} ]
})
export class DanceViewComponent extends ValueAccessor<number> implements OnInit  {
  @Input() dance: number;
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Dance";

  ngOnInit() {
    // TODO: check if really needed
    if(this.dance != null) {
      this.value = this.dance;
    }
  }
}
