import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSongWindowComponent } from './new-song-window.component';

describe('NewSongWindowComponent', () => {
  let component: NewSongWindowComponent;
  let fixture: ComponentFixture<NewSongWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSongWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSongWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
