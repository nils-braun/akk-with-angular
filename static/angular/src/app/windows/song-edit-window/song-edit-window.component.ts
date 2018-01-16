import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Song} from '../../entities/song';

@Component({
  selector: 'app-song-edit-window',
  templateUrl: './song-edit-window.component.html',
  styleUrls: ['./song-edit-window.component.css']
})
export class SongEditWindowComponent implements OnInit {

  song: Song;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.song = {
      id: +id,
      title: "Test title",
      artist: {id: 0, name: "Test artist"},
      labels: [{ name: "label_1", color: "red", id: 0}],
      bpm: 0,
      rating: 0,
      dance: {"id": 0, "name": "Test dance"},
      userRating: 1,
    };
    console.log(this.song);
  }
}
