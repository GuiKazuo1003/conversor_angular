import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorPesoComponent } from './conversor-peso.component';

describe('ConversorPesoComponent', () => {
  let component: ConversorPesoComponent;
  let fixture: ComponentFixture<ConversorPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorPesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
