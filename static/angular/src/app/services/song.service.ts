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
    ],
    comments: [],
    path: null,
    duration: 400,
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
    ],
    comments: [],
    path: null,
    duration: 242,
  }
];

@Injectable()
export class SongService {

  constructor() { }

  getSongs(term: string, orderBy: string) : Observable<Song[]> {
    let songs: Song[];
    if(!term) {
      songs = SONGS;
    } else {
      songs = SONGS.filter(v =>
        v.title.toLowerCase().includes(term.toLowerCase()) ||
        v.artist.toLowerCase().includes(term.toLowerCase()) ||
        v.dance.toLowerCase().includes(term.toLowerCase())
        );
    }

    if(orderBy) {
      songs = songs.sort((a, b) => {
        if (a[orderBy] > b[orderBy]) { return -1}
        else if (a[orderBy] < b[orderBy]) { return 1}
        else return 0;
      })
    }

    return of(songs);
  }

  getWishes(term: string, orderBy: string) : Observable<Song[]> {
    // TODO
    return this.getSongs(term, orderBy);
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
