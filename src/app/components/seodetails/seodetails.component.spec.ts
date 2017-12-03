import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeodetailsComponent } from './seodetails.component';

describe('SeodetailsComponent', () => {
  let component: SeodetailsComponent;
  let fixture: ComponentFixture<SeodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
