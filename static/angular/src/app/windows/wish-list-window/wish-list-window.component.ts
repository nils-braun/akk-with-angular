import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {Song} from '../../entities/song';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-wish-list-window',
  templateUrl: './wish-list-window.component.html',
  styleUrls: ['./wish-list-window.component.css']
})
export class WishListWindowComponent implements OnInit {
  wishes: Observable<Song[]>;

  constructor(private songService: SongService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.wishes = this.route.queryParamMap.switchMap((params: ParamMap) =>
        this.songService.getWishes(params.get('query'), params.get('orderBy')));
  }
}
