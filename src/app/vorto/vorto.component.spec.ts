import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VortoComponent } from './vorto.component';

describe('VortoComponent', () => {
  let component: VortoComponent;
  let fixture: ComponentFixture<VortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
