import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelleMenuComponent } from './tabelle-menu.component';

describe('TabelleMenuComponent', () => {
  let component: TabelleMenuComponent;
  let fixture: ComponentFixture<TabelleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
