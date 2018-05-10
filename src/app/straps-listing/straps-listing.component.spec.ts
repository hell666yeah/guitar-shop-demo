import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrapsListingComponent } from './straps-listing.component';

describe('StrapsListingComponent', () => {
  let component: StrapsListingComponent;
  let fixture: ComponentFixture<StrapsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrapsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrapsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
