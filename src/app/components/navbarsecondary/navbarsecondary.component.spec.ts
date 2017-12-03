import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsecondaryComponent } from './navbarsecondary.component';

describe('NavbarsecondaryComponent', () => {
  let component: NavbarsecondaryComponent;
  let fixture: ComponentFixture<NavbarsecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarsecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
