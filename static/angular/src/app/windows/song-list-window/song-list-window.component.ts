import { Component, OnInit } from '@angular/core';
import {Song} from '../../entities/song';
import {SongService} from '../../services/song.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-song-list-window',
  templateUrl: './song-list-window.component.html',
  styleUrls: ['./song-list-window.component.css']
})
export class SongListWindowComponent implements OnInit {
  songs : Observable<Song[]>;

  constructor(private songService : SongService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.songs = this.route.queryParamMap.switchMap((params: ParamMap) =>
        this.songService.getSongs(params.get("query"), params.get("orderBy")));
  }
}
