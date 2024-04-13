import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTemplateComponent } from './selected-template.component';

describe('SelectedTemplateComponent', () => {
  let component: SelectedTemplateComponent;
  let fixture: ComponentFixture<SelectedTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedTemplateComponent]
    });
    fixture = TestBed.createComponent(SelectedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
