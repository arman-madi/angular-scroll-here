import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHereComponent } from './scroll-here.component';

describe('ScrollHereComponent', () => {
  let component: ScrollHereComponent;
  let fixture: ComponentFixture<ScrollHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
