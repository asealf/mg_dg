import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipiRegistroComponent } from './tipi-registro.component';

describe('TipiRegistroComponent', () => {
  let component: TipiRegistroComponent;
  let fixture: ComponentFixture<TipiRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipiRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipiRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
