import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {Label} from '../../entities/label';
import {ValueAccessor} from '../value-accessor/value-accessor';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {LabelService} from '../../services/label.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-label-list-view',
  templateUrl: './label-list-view.component.html',
  styleUrls: ['./label-list-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LabelListViewComponent),
    multi: true
  } ]
})
export class LabelListViewComponent extends ValueAccessor<Label> implements OnInit  {
  @Input() readonly: boolean = true;

  @ViewChild('input') someInput: ElementRef;

  constructor(private labelService : LabelService) {
    super();
  }

  ngOnInit() {
  }

  search = (text: string) : Observable<Label[]> => {
    return this.labelService.getLabels(text);
  };

  matchingFn(value, target) : boolean {
    const targetValue : string = target.name.toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
  }
}
