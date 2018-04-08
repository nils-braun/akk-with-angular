import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListWindowComponent } from './windows/song-list-window/song-list-window.component';
import { WishListWindowComponent } from './windows/wish-list-window/wish-list-window.component';
import { PlaylistsWindowComponent } from './windows/playlists-window/playlists-window.component';
import { ArtistEditWindowComponent } from './windows/artist-edit-window/artist-edit-window.component';
import { DanceEditWindowComponent } from './windows/dance-edit-window/dance-edit-window.component';
import { SongEditWindowComponent } from './windows/song-edit-window/song-edit-window.component';
import { WishEditWindowComponent } from './windows/wish-edit-window/wish-edit-window.component';
import { LoginWindowComponent } from './windows/login-window/login-window.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginWindowComponent },
  { path: '', redirectTo: '/song-list', pathMatch: 'full', canActivate: [AuthenticationGuard] },
  { path: 'song-list', component: SongListWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'wish-list', component: WishListWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'playlists', component: PlaylistsWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-artist', component: ArtistEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-artist/:id', component: ArtistEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-dance', component: DanceEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-dance/:id', component: DanceEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-song', component: SongEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-song/:id', component: SongEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-wish', component: WishEditWindowComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-wish/:id', component: WishEditWindowComponent, canActivate: [AuthenticationGuard] },

  // Otherwise go to home
  { path: '**', redirectTo: '/song-list' }
  // maybe easier with     data: { title: 'Heroes List' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
