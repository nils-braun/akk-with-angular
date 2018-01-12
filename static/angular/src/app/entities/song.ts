import {Label} from './label';

export class Song {
  id: number;
  title: string;
  artist: string;
  dance: string;
  labels: Array<Label>;
  rating: number;
  bpm: number;
}
