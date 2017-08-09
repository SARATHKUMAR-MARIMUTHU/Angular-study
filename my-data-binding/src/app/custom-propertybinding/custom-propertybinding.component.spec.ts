import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertybindingComponent } from './custom-propertybinding.component';

describe('CustomPropertybindingComponent', () => {
  let component: CustomPropertybindingComponent;
  let fixture: ComponentFixture<CustomPropertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPropertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
