import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrlistComponent } from './crlist.component';

describe('CrlistComponent', () => {
  let component: CrlistComponent;
  let fixture: ComponentFixture<CrlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
