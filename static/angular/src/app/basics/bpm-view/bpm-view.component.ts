import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';

@Component({
  selector: 'app-bpm-view',
  templateUrl: './bpm-view.component.html',
  styleUrls: ['./bpm-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BPMViewComponent),
    multi: true
} ]
})
export class BPMViewComponent extends ValueAccessor<number> implements OnInit  {
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Bpm";

  ngOnInit() { }
}
