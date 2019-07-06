import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CefpagoComponent } from './cefpago.component';

describe('CefpagoComponent', () => {
  let component: CefpagoComponent;
  let fixture: ComponentFixture<CefpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CefpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CefpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
