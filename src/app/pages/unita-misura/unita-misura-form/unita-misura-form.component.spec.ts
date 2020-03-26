import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitaMisuraFormComponent } from './unita-misura-form.component';

describe('UnitaMisuraFormComponent', () => {
  let component: UnitaMisuraFormComponent;
  let fixture: ComponentFixture<UnitaMisuraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitaMisuraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitaMisuraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
