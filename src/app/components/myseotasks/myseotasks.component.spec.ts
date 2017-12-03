import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyseotasksComponent } from './myseotasks.component';

describe('MyseotasksComponent', () => {
  let component: MyseotasksComponent;
  let fixture: ComponentFixture<MyseotasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyseotasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyseotasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
