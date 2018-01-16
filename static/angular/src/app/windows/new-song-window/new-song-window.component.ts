import { Component, OnInit } from '@angular/core';
import {Song} from '../../entities/song';

@Component({
  selector: 'app-new-song-window',
  templateUrl: './new-song-window.component.html',
  styleUrls: ['./new-song-window.component.css']
})
export class NewSongWindowComponent implements OnInit {

  song: Song = new Song();

  constructor() { }

  ngOnInit() {
  }

}
