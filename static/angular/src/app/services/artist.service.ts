import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Artist } from '../entities/artist';


export const ARTISTS : Artist[] = [
    {id: 0, name: "My artist"},
    {id: 1, name: "My other artist"},
  ];

@Injectable()
export class ArtistService {

  constructor() { }

  getArtists() : Observable<Artist[]> {
    // TODO
    return of(ARTISTS);
  }

  getArtist(id: number): Observable<Artist> {
    return of(ARTISTS.find(artist => artist.id === id));
  }

  updateArtist(changedArtist : Artist) {
    ARTISTS.find(artist => artist.id === changedArtist.id).name = changedArtist.name;
  }

}
