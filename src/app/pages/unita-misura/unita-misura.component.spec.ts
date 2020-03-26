import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitaMisuraComponent } from './unita-misura.component';

describe('UnitaMisuraComponent', () => {
  let component: UnitaMisuraComponent;
  let fixture: ComponentFixture<UnitaMisuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitaMisuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitaMisuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
