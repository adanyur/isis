import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientecitadosComponent } from './pacientecitados.component';

describe('PacientecitadosComponent', () => {
  let component: PacientecitadosComponent;
  let fixture: ComponentFixture<PacientecitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientecitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientecitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
