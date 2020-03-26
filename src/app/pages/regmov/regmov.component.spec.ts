import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmovComponent } from './regmov.component';

describe('RegmovComponent', () => {
  let component: RegmovComponent;
  let fixture: ComponentFixture<RegmovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegmovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegmovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
