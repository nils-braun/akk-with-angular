import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Artist} from '../../entities/artist';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessor} from '../value-accessor/value-accessor';

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
export class ArtistViewComponent extends ValueAccessor<Artist> implements OnInit  {
  @Input() artist: Artist;
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Artist";

  ngOnInit() {
    if(this.artist != null) {
      this.value = this.artist;
    }
  }
}
