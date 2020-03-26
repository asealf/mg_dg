import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezziTraspComponent } from './mezzi-trasp.component';

describe('MezziTraspComponent', () => {
  let component: MezziTraspComponent;
  let fixture: ComponentFixture<MezziTraspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezziTraspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezziTraspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
