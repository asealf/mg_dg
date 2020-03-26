import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmovFormComponent } from './regmov-form.component';

describe('RegmovFormComponent', () => {
  let component: RegmovFormComponent;
  let fixture: ComponentFixture<RegmovFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegmovFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegmovFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
