import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoyshoComponent } from './boysho.component';

describe('BoyshoComponent', () => {
  let component: BoyshoComponent;
  let fixture: ComponentFixture<BoyshoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoyshoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoyshoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
