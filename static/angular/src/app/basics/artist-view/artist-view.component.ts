import {Component, Input, OnInit, Output} from '@angular/core';
import {Artist} from '../../entities/artist';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent implements OnInit {

  @Input() @Output() artist : Artist;
  @Input() readonly : boolean = true;
  @Input() labelText: string = "Artist";

  constructor() { }

  ngOnInit() {
    if(this.artist == null) {
      this.artist = new Artist();
    }
  }

}
