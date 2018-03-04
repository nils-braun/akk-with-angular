import {Label} from './label';
import {Comment} from './comment';

export class Song {
  id: number;
  title: string;
  artist: string;
  dance: string;
  labels: Label[];
  rating: number;
  userRating: number;
  bpm: number;
  path: string;
  duration = 0; // in seconds
  comments: Comment[];
}
