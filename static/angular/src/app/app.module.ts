import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SongTableComponent } from './song-table/song-table.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SongFormComponent } from './song-form/song-form.component';
import { RatingViewComponent } from './rating-view/rating-view.component';
import { LabelViewComponent } from './label-view/label-view.component';
import { LabelListViewComponent } from './label-list-view/label-list-view.component';
import { PlaylistViewComponent } from './playlist-view/playlist-view.component';
import { BpmViewComponent } from './bpm-view/bpm-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    SongTableComponent,
    AddButtonComponent,
    LoginFormComponent,
    SongFormComponent,
    RatingViewComponent,
    LabelViewComponent,
    LabelListViewComponent,
    PlaylistViewComponent,
    BpmViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
