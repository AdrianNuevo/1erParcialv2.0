import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarayudaComponent } from './registrarayuda.component';

describe('RegistrarayudaComponent', () => {
  let component: RegistrarayudaComponent;
  let fixture: ComponentFixture<RegistrarayudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarayudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarayudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
