import { Component, OnInit } from '@angular/core';
import {Song} from '../../entities/song';
import {SongService} from '../../services/song.service';

@Component({
  selector: 'app-song-list-window',
  templateUrl: './song-list-window.component.html',
  styleUrls: ['./song-list-window.component.css']
})
export class SongListWindowComponent implements OnInit {
  songs : Song[];

  constructor(private songService : SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() : void {
    this.songService.getSongs().subscribe(songs => this.songs = songs);
  }

}
