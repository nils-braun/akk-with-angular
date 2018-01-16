import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../../entities/artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  @Input() artist: Artist;

  nameAfter: string;

  constructor() { }

  ngOnInit() {
    if(this.artist != null) {
      this.nameAfter = this.artist.name;
    }
  }
}
