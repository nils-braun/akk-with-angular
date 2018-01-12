import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEditWindowComponent } from './song-edit-window.component';

describe('SongEditWindowComponent', () => {
  let component: SongEditWindowComponent;
  let fixture: ComponentFixture<SongEditWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongEditWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongEditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
