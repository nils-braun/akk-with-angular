import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsWindowComponent } from './playlists-window.component';

describe('PlaylistsWindowComponent', () => {
  let component: PlaylistsWindowComponent;
  let fixture: ComponentFixture<PlaylistsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
