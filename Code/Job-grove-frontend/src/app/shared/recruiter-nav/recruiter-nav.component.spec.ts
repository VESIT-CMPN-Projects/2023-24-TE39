import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterNavComponent } from './recruiter-nav.component';

describe('RecruiterNavComponent', () => {
  let component: RecruiterNavComponent;
  let fixture: ComponentFixture<RecruiterNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterNavComponent]
    });
    fixture = TestBed.createComponent(RecruiterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
