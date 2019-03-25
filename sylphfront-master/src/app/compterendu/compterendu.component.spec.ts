import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterenduComponent } from './compterendu.component';

describe('CompterenduComponent', () => {
  let component: CompterenduComponent;
  let fixture: ComponentFixture<CompterenduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompterenduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompterenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
