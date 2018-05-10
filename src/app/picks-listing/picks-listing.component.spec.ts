import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicksListingComponent } from './picks-listing.component';

describe('PicksListingComponent', () => {
  let component: PicksListingComponent;
  let fixture: ComponentFixture<PicksListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicksListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicksListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
