import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';

@Component({
  selector: 'app-path-view',
  templateUrl: './path-view.component.html',
  styleUrls: ['./path-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PathViewComponent),
    multi: true
} ]
})
export class PathViewComponent extends ValueAccessor<string> implements OnInit  {
  @Input() readonly = true;
  @Input() labelText = 'Path';

  ngOnInit() { }
}
