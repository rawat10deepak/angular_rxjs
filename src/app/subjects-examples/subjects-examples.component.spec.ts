import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsExamplesComponent } from './subjects-examples.component';

describe('SubjectsExamplesComponent', () => {
  let component: SubjectsExamplesComponent;
  let fixture: ComponentFixture<SubjectsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
