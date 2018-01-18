import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './basics/navbar/navbar.component';
import { SearchBarComponent } from './basics/search-bar/search-bar.component';
import { SongTableComponent } from './composite/song-table/song-table.component';
import { AddButtonComponent } from './basics/add-button/add-button.component';
import { LoginFormComponent } from './composite/login-form/login-form.component';
import { RatingViewComponent } from './basics/rating-view/rating-view.component';
import { LabelViewComponent } from './basics/label-view/label-view.component';
import { LabelListViewComponent } from './basics/label-list-view/label-list-view.component';
import { PlaylistViewComponent } from './composite/playlist-view/playlist-view.component';
import { BPMViewComponent } from './basics/bpm-view/bpm-view.component';
import { AppRoutingModule } from './app-routing.module';
import { SongListWindowComponent } from './windows/song-list-window/song-list-window.component';
import { WishListWindowComponent } from './windows/wish-list-window/wish-list-window.component';
import { PlaylistsWindowComponent } from './windows/playlists-window/playlists-window.component';
import { SongEditWindowComponent } from './windows/song-edit-window/song-edit-window.component';
import { DanceEditWindowComponent } from './windows/dance-edit-window/dance-edit-window.component';
import { ArtistEditWindowComponent } from './windows/artist-edit-window/artist-edit-window.component';
import { ArtistFormComponent } from './composite/artist-form/artist-form.component';
import { DanceFormComponent } from './composite/dance-form/dance-form.component';
import { FormsModule } from '@angular/forms';
import { DanceViewComponent } from './basics/dance-view/dance-view.component';
import { ArtistViewComponent } from './basics/artist-view/artist-view.component';
import { SongService } from './services/song.service';
import { ArtistService } from './services/artist.service';
import { DanceService } from './services/dance.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    SongTableComponent,
    AddButtonComponent,
    LoginFormComponent,
    RatingViewComponent,
    LabelViewComponent,
    LabelListViewComponent,
    PlaylistViewComponent,
    BPMViewComponent,
    SongListWindowComponent,
    WishListWindowComponent,
    PlaylistsWindowComponent,
    SongEditWindowComponent,
    DanceEditWindowComponent,
    ArtistEditWindowComponent,
    ArtistFormComponent,
    DanceFormComponent,
    DanceViewComponent,
    ArtistViewComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [SongService, ArtistService, DanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
