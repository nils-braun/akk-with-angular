import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {ArtistService} from '../../services/artist.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css'],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ArtistViewComponent),
    multi: true
} ]
})
export class ArtistViewComponent extends ValueAccessor<string> implements OnInit  {
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Artist";

  constructor(private artistService : ArtistService) {
    super();
  }

  ngOnInit() { }

  // TODO: is is not possible to use this in { }
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      //.do(() => this.searching = true)
      .switchMap(term =>
          this.artistService.getArtists(term)
        //.do(() => this.searchFailed = false)
        //.catch(() => {
        //  this.searchFailed = true;
        //  return of([]);
        //})
      )
    //.do(() => this.searching = false)
}
