import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkenaVortoComponent } from './okena-vorto.component';

describe('OkenaVortoComponent', () => {
  let component: OkenaVortoComponent;
  let fixture: ComponentFixture<OkenaVortoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkenaVortoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkenaVortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
