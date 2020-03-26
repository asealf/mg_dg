import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampamovComponent } from './stampamov.component';

describe('StampamovComponent', () => {
  let component: StampamovComponent;
  let fixture: ComponentFixture<StampamovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampamovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampamovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
