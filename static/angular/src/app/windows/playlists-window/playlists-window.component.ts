import { Component, OnInit } from '@angular/core';
import {Song} from '../../entities/song';
import {SongService} from '../../services/song.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-playlists-window',
  templateUrl: './playlists-window.component.html',
  styleUrls: ['./playlists-window.component.css']
})
export class PlaylistsWindowComponent implements OnInit {
  songs : Observable<Song[]>;

  constructor(private songService : SongService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.songs = this.route.queryParamMap.switchMap((params: ParamMap) =>
        this.songService.getSongs(params.get("query"), params.get("orderBy")));
  }
}
