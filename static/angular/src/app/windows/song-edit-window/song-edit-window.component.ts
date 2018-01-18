import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Song} from '../../entities/song';
import {SongService} from '../../services/song.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-song-edit-window',
  templateUrl: './song-edit-window.component.html',
  styleUrls: ['./song-edit-window.component.css']
})
export class SongEditWindowComponent implements OnInit {

  song: Song;

  constructor(private route: ActivatedRoute, private location : Location, private songService : SongService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if(id != null) {
      this.songService.getSong(+id).subscribe(song => this.song = song);
    } else {
      this.song = new Song();
    }
  }

  onSubmit() : void {
    if(this.song.id == null) {
      this.songService.addSong(this.song);
    } else {
      this.songService.updateSong(this.song);
    }
    this.location.back();
  }

  onDelete() : void {
    this.songService.deleteSong(this.song);
    this.location.back();
  }

  onCancel() : void {
    this.location.back();
  }
}
