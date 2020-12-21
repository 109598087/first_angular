import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProjectPageComponent } from './choose-project-page.component';

describe('ChooseProjectPageComponent', () => {
  let component: ChooseProjectPageComponent;
  let fixture: ComponentFixture<ChooseProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
