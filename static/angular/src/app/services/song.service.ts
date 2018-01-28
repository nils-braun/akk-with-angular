import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Song } from '../entities/song';
import {ARTISTS} from './artist.service';
import {DANCES} from './dance.service';
import {LABELS} from './label.service';


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
      LABELS[0]
    ]
  },
  {
    id: 1,
    title: "My other title",
    artist: ARTISTS[1],
    dance: DANCES[1],
    rating: 4,
    userRating: 0,
    bpm: null,
    labels: [
      LABELS[1],
      LABELS[2],
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
    let index = SONGS.findIndex(song => song.id === newSong.id);
    if(index == -1) {
      throw Error("Bad");
    }
    SONGS[index] = newSong;
  }

  addSong(newSong: Song) : void {
    SONGS.push(newSong);
  }

  deleteSong(oldSong: Song) : void {
    let index = SONGS.findIndex(song => song.id === oldSong.id);
    if(index == -1) {
      throw Error("Bad");
    }
    SONGS.splice(index, 1);
  }
}
