import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export const ARTISTS: string[] = [
    'My artist',
    'My other artist',
  ];

@Injectable()
export class ArtistService {

  constructor() { }

  getArtists(term: string): Observable<string[]> {
    return of(ARTISTS.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1));
  }

  updateArtist(artist: string, changedArtist: string): void {
    const index: number = ARTISTS.indexOf(artist);
    ARTISTS[index] = changedArtist;
  }

}
