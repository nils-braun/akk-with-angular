import { Component } from '@angular/core';
import {Song} from './entities/song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songs : Array<Song> = [
    {
      id: 0,
      title: "My title",
      artist: "My artist",
      dance: "My dance",
      rating: 4.5,
      bpm: 180,
      labels: [
        { id: 0, name: "label_1", color: "111111" }
      ]
    },
    {
      id: 1,
      title: "My other title",
      artist: "My other artist",
      dance: "My other dance",
      rating: 4,
      bpm: 48,
      labels: [
        { id: 1, name: "label_2", color: "555555" },
        { id: 2, name: "label_3", color: "333333" }
      ]
    }
  ];
}
