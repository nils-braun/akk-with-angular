import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../entities/song';
import {Location} from '@angular/common';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {

  // Convention: if ID is null, song is new
  // TODO: maybe even better: an output?
  @Input() song : Song;

  constructor(private location : Location) { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.location.back();
  }

}
