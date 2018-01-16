import {Label} from './label';
import {Dance} from './dance';
import {Artist} from './artist';

export class Song {
  id: number = null;
  title: string = "";
  artist: Artist = new Artist();
  dance: Dance = new Dance();
  labels: Array<Label> = [];
  rating: number = null;
  userRating: number = null;
  bpm: number = null;
}
