import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcontentChild1Component } from './rightcontent-child1.component';

describe('RightcontentChild1Component', () => {
  let component: RightcontentChild1Component;
  let fixture: ComponentFixture<RightcontentChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightcontentChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcontentChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
