import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoWorklistComponent } from './seo-worklist.component';

describe('SeoWorklistComponent', () => {
  let component: SeoWorklistComponent;
  let fixture: ComponentFixture<SeoWorklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoWorklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
