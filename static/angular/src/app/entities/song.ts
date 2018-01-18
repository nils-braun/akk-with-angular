import {Label} from './label';

export class Song {
  id: number = null;
  title: string = "";
  artist: string = "";
  dance: string = "";
  labels: Array<Label> = [];
  rating: number = null;
  userRating: number = null;
  bpm: number = null;
}
