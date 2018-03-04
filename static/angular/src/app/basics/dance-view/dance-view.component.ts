import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {DanceService} from '../../services/dance.service';

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
export class DanceViewComponent extends ValueAccessor<string> implements OnInit  {
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Dance";
  @Input() typeAhead: boolean = true;

  constructor(private danceService : DanceService) {
    super();
  }

  ngOnInit() { }

  // TODO: is is not possible to use this in { }
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term =>
          this.danceService.getDances(term)
      )
}
