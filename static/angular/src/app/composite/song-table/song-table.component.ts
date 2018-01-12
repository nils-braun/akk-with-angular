import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../entities/song';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent implements OnInit {

  @Input() songs: Array<Song>;

  constructor() { }

  ngOnInit() {
  }

}
