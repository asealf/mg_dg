import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DittaComponent } from './ditta.component';

describe('DittaComponent', () => {
  let component: DittaComponent;
  let fixture: ComponentFixture<DittaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DittaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
