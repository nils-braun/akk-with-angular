import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {Song} from '../../entities/song';

@Component({
  selector: 'app-wish-list-window',
  templateUrl: './wish-list-window.component.html',
  styleUrls: ['./wish-list-window.component.css']
})
export class WishListWindowComponent implements OnInit {

  wishes : Song[];

  constructor(private songService : SongService) { }

  ngOnInit() {
    this.getWishes();
  }

  getWishes() : void {
    this.songService.getWishes().subscribe(wishes => this.wishes = wishes);
  }

}
