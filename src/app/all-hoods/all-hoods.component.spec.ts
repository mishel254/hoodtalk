import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHoodsComponent } from './all-hoods.component';

describe('AllHoodsComponent', () => {
  let component: AllHoodsComponent;
  let fixture: ComponentFixture<AllHoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
