import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuteFormComponent } from './valute-form.component';

describe('ValuteFormComponent', () => {
  let component: ValuteFormComponent;
  let fixture: ComponentFixture<ValuteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
