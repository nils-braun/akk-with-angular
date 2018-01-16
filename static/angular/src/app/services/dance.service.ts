import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Dance } from '../entities/dance';


export const DANCES : Dance[] = [
    {id: 0, name: "My dance"},
    {id: 1, name: "My other dance"},
  ];

@Injectable()
export class DanceService {

  constructor() { }

  getDances() : Observable<Dance[]> {
    // TODO
    return of(DANCES);
  }

  getDance(id: number): Observable<Dance> {
    return of(DANCES.find(dance => dance.id === id));
  }

  updateDance(changedDance : Dance) {
    DANCES.find(dance => dance.id === changedDance.id).name = changedDance.name;
  }

}
