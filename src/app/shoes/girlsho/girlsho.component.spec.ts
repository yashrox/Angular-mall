import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlshoComponent } from './girlsho.component';

describe('GirlshoComponent', () => {
  let component: GirlshoComponent;
  let fixture: ComponentFixture<GirlshoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlshoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlshoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
