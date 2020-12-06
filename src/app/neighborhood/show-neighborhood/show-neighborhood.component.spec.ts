import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNeighborhoodComponent } from './show-neighborhood.component';

describe('ShowNeighborhoodComponent', () => {
  let component: ShowNeighborhoodComponent;
  let fixture: ComponentFixture<ShowNeighborhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNeighborhoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
