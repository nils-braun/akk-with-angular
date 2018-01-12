import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../entities/song';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent implements OnInit {

  @Input() songs: Array<Song>;

  editSong(song : Song) {
    this.router.navigate(["/edit-song", song.id]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
