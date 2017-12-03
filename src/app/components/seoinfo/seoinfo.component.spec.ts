import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoinfoComponent } from './seoinfo.component';

describe('SeoinfoComponent', () => {
  let component: SeoinfoComponent;
  let fixture: ComponentFixture<SeoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
