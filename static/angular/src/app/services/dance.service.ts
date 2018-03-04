import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export const DANCES: string[] = [
    'My dance',
    'My other dance',
  ];

@Injectable()
export class DanceService {

  constructor() { }

  getDances(term: string): Observable<string[]> {
    return of(DANCES.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1));
  }

  updateDance(dance: string, changedDance: string): void {
    const index: number = DANCES.indexOf(dance);
    DANCES[index] = changedDance;
  }

}
