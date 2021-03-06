import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../entities/song';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent implements OnInit {

  @Input() songs: Array<Song>;
  @Input() readonly = false;
  @Input() wish : boolean = false;


  orderBy: string;

  columns = [
    {'id': 'title', 'name': ' Song Title'},
    {'id': 'artist', 'name': 'Artist Name'},
    {'id': 'dance', 'name': 'Dance Name'},
    {'id': 'label', 'name': 'Label'},
    {'id': 'rating', 'name': 'Rating'},
    {'id': 'userRating', 'name': 'Your Rating'},
    {'id': 'duration', 'name': 'Duration'},
    {'id': 'bpm', 'name': 'BPM'},
  ];

  editSong(song: Song) {
    if (!this.readonly) {
      let editURL : string;
      if(this.wish) {
        editURL = "./edit-wish";
      } else {
        editURL = "./edit-song";
      }
      this.router.navigate([editURL, song.id]);
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    route.queryParamMap.subscribe((params: ParamMap) => {
      this.orderBy = params.get('orderBy');
    });
  }

  ngOnInit() {
  }

  sortTable(columnName: string) {
    this.router.navigate(['./'], { queryParams: { orderBy: columnName }, relativeTo: this.route,
      queryParamsHandling: 'merge'});
  }
}
