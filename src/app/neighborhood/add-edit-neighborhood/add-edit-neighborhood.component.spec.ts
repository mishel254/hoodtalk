import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNeighborhoodComponent } from './add-edit-neighborhood.component';

describe('AddEditNeighborhoodComponent', () => {
  let component: AddEditNeighborhoodComponent;
  let fixture: ComponentFixture<AddEditNeighborhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNeighborhoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
