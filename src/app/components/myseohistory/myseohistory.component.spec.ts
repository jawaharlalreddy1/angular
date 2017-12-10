import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyseohistoryComponent } from './myseohistory.component';

describe('MyseohistoryComponent', () => {
  let component: MyseohistoryComponent;
  let fixture: ComponentFixture<MyseohistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyseohistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyseohistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
