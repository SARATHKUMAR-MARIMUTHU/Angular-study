import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventbindingComponent } from './custom-eventbinding.component';

describe('CustomEventbindingComponent', () => {
  let component: CustomEventbindingComponent;
  let fixture: ComponentFixture<CustomEventbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEventbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
