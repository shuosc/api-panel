import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VComponent } from './v.component';

describe('VComponent', () => {
  let component: VComponent;
  let fixture: ComponentFixture<VComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
