import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ArtistService} from '../../services/artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  @Input() artist: string;

  nameAfter: string;

  constructor(private location : Location, private artistService : ArtistService) { }

  ngOnInit() { }

  onSubmit() : void {
    this.artistService.updateArtist(this.artist, this.nameAfter);
    this.location.back();
  }

  onCancel() : void {
    this.location.back();
  }
}
