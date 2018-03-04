import { Component, OnInit } from '@angular/core';
import {Song} from '../../entities/song';
import {SongService} from '../../services/song.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-wish-edit-window',
  templateUrl: './wish-edit-window.component.html',
  styleUrls: ['./wish-edit-window.component.css']
})
export class WishEditWindowComponent implements OnInit {
  wish: Song;

  constructor(private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.songService.getSong(+id).subscribe(wish => this.wish = wish);
    } else {
      this.wish = new Song();
    }
  }
}
