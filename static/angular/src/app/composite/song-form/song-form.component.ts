import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../entities/song';
import {SongService} from '../../services/song.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent implements OnInit {
  @Input() song: Song;
  @Input() wish: boolean = false;

  constructor(private location: Location, private songService: SongService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.song.id == null) {
      this.songService.addSong(this.song);
    } else {
      this.songService.updateSong(this.song);
    }
    this.location.back();
  }

  onDelete(): void {
    this.songService.deleteSong(this.song);
    this.location.back();
  }

  onCancel(): void {
    this.location.back();
  }

  onConvert() : void {
    this.songService.convertWish(this.song);
  }
}
