import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListWindowComponent } from './song-list-window.component';

describe('SongListWindowComponent', () => {
  let component: SongListWindowComponent;
  let fixture: ComponentFixture<SongListWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
