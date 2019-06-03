import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesakComponent } from './vesak.component';

describe('VesakComponent', () => {
  let component: VesakComponent;
  let fixture: ComponentFixture<VesakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
