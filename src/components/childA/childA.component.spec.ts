import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAComponent } from '../childA/childA.component';

describe('ChildAComponent', () => {
  let component: ChildAComponent;
  let fixture: ComponentFixture<ChildAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
