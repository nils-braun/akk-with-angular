import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditWindowComponent } from './artist-edit-window.component';

describe('ArtistEditWindowComponent', () => {
  let component: ArtistEditWindowComponent;
  let fixture: ComponentFixture<ArtistEditWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
