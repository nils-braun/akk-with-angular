import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListWindowComponent } from './windows/song-list-window/song-list-window.component';
import { WishListWindowComponent } from './windows/wish-list-window/wish-list-window.component';
import { PlaylistsWindowComponent } from './windows/playlists-window/playlists-window.component';
import { ArtistEditWindowComponent } from './windows/artist-edit-window/artist-edit-window.component';
import { DanceEditWindowComponent } from './windows/dance-edit-window/dance-edit-window.component';
import { SongEditWindowComponent } from './windows/song-edit-window/song-edit-window.component';

const routes : Routes = [
  { path: '', redirectTo: '/song-list', pathMatch: 'full' },
  { path: 'song-list', component: SongListWindowComponent },
  { path: 'wish-list', component: WishListWindowComponent },
  { path: 'playlists', component: PlaylistsWindowComponent },
  { path: 'edit-artist', component: ArtistEditWindowComponent },
  { path: 'edit-dance', component: DanceEditWindowComponent },
  { path: 'edit-song/:id', component: SongEditWindowComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
