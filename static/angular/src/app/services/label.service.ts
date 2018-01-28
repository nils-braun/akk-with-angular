import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Label } from '../entities/label';

export const LABELS : Label[] = [
  {name: "label_1", color: "red"},
  {name: "label_2", color: "blue"},
  {name: "label_3", color: "green"},
  ];

@Injectable()
export class LabelService {

  constructor() { }

  getLabels(term : string) : Observable<Label[]> {
    return of(LABELS.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1));
  }
}
