import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MezziTraspFormComponent } from './mezzi-trasp-form.component';

describe('MezziTraspFormComponent', () => {
  let component: MezziTraspFormComponent;
  let fixture: ComponentFixture<MezziTraspFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MezziTraspFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MezziTraspFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
