import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RighemovFormComponent } from './righemov-form.component';

describe('RighemovFormComponent', () => {
  let component: RighemovFormComponent;
  let fixture: ComponentFixture<RighemovFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RighemovFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RighemovFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
