import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipiRegistroFormComponent } from './tipi-registro-form.component';

describe('TipiRegistroFormComponent', () => {
  let component: TipiRegistroFormComponent;
  let fixture: ComponentFixture<TipiRegistroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipiRegistroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipiRegistroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
