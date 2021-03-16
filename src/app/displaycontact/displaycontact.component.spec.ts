import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycontactComponent } from './displaycontact.component';

describe('DisplaycontactComponent', () => {
  let component: DisplaycontactComponent;
  let fixture: ComponentFixture<DisplaycontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
