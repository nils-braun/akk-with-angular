import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {DanceService} from '../../services/dance.service';

@Component({
  selector: 'app-dance-form',
  templateUrl: './dance-form.component.html',
  styleUrls: ['./dance-form.component.css']
})
export class DanceFormComponent implements OnInit {

  @Input() dance: string;

  nameAfter: string;

  constructor(private location : Location, private danceService : DanceService) { }

  ngOnInit() { }

  onSubmit() : void {
    this.danceService.updateDance(this.dance, this.nameAfter);
    this.location.back();
  }

}
