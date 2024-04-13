import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCorricularComponent } from './co-corricular.component';

describe('CoCorricularComponent', () => {
  let component: CoCorricularComponent;
  let fixture: ComponentFixture<CoCorricularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoCorricularComponent]
    });
    fixture = TestBed.createComponent(CoCorricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
