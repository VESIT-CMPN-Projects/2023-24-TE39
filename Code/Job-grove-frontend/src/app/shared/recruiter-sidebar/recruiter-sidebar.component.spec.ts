import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSidebarComponent } from './recruiter-sidebar.component';

describe('RecruiterSidebarComponent', () => {
  let component: RecruiterSidebarComponent;
  let fixture: ComponentFixture<RecruiterSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterSidebarComponent]
    });
    fixture = TestBed.createComponent(RecruiterSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
