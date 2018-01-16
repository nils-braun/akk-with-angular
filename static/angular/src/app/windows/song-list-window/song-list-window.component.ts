import { Component, OnInit } from '@angular/core';
import {Song} from '../../entities/song';

@Component({
  selector: 'app-song-list-window',
  templateUrl: './song-list-window.component.html',
  styleUrls: ['./song-list-window.component.css']
})
export class SongListWindowComponent implements OnInit {
  songs : Array<Song> = [
    {
      id: 0,
      title: "My title",
      artist: {"id": 0, "name": "My artist"},
      dance: {"id": 0, "name": "My dance"},
      rating: 4.5,
      userRating: 0,
      bpm: 180,
      labels: [
        { id: 0, name: "label_1", color: "#aa0000" }
      ]
    },
    {
      id: 1,
      title: "My other title",
      artist: {"id": 1, "name": "My other artist"},
      dance: {"id": 1, "name": "My other dance"},
      rating: 4,
      userRating: 0,
      bpm: 48,
      labels: [
        { id: 1, name: "label_2", color: "#55bbaa" },
        { id: 2, name: "label_3", color: "#00bb00" }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
