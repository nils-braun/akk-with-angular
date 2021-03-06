import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { AppComponent } from './app.component';
import { NavbarComponent } from './basics/navbar/navbar.component';
import { SearchBarComponent } from './basics/search-bar/search-bar.component';
import { SongTableComponent } from './composite/song-table/song-table.component';
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
import { LabelService } from './services/label.service';
import { PathViewComponent } from './basics/path-view/path-view.component';
import { DurationViewComponent } from './basics/duration-view/duration-view.component';
import { SongFormComponent } from './composite/song-form/song-form.component';
import { WishEditWindowComponent } from './windows/wish-edit-window/wish-edit-window.component';
import { LoginWindowComponent } from './windows/login-window/login-window.component';
import {AuthenticationService} from './services/authentication.service';
import {AuthenticationGuard} from './guards/authentication.guard';
import { MessagesViewComponent } from './basics/messages-view/messages-view.component';
import { MessageService } from './services/message.service';
import { AlertViewComponent } from './basics/alert-view/alert-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    SongTableComponent,
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
    PathViewComponent,
    DurationViewComponent,
    SongFormComponent,
    WishEditWindowComponent,
    LoginWindowComponent,
    MessagesViewComponent,
    AlertViewComponent,
  ],
  imports: [
    TagInputModule,
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    SongService,
    ArtistService,
    DanceService,
    LabelService,
    AuthenticationService,
    AuthenticationGuard,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
