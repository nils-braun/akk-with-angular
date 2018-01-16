import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Song } from '../entities/song';
import {ARTISTS} from './artist.service';
import {DANCES} from './dance.service';


const SONGS : Song[] = [
  {
    id: 0,
    title: "My title",
    artist: ARTISTS[0],
    dance: DANCES[0],
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
    artist: ARTISTS[1],
    dance: DANCES[1],
    rating: 4,
    userRating: 0,
    bpm: 48,
    labels: [
      { id: 1, name: "label_2", color: "#55bbaa" },
      { id: 2, name: "label_3", color: "#00bb00" }
    ]
  }
];

@Injectable()
export class SongService {

  constructor() { }

  getSongs() : Observable<Song[]> {
    // TODO
    return of(SONGS);
  }

  getWishes() : Observable<Song[]> {
    // TODO
    return of(SONGS);
  }

  getSong(id: number): Observable<Song> {
    return of(SONGS.find(song => song.id === id));
  }

  updateSong(newSong: Song) : void {
    let arrayIndex = SONGS.findIndex(song => song.id === newSong.id);
    if(arrayIndex == -1) {
      throw Error("Bad");
    }
    SONGS[arrayIndex] = newSong;
    console.log(newSong);
  }

  addSong(newSong: Song) : void {
    SONGS.push(newSong);
  }
}
