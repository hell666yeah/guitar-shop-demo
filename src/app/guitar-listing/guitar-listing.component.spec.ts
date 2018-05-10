import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarListingComponent } from './guitar-listing.component';

describe('GuitarListingComponent', () => {
  let component: GuitarListingComponent;
  let fixture: ComponentFixture<GuitarListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
