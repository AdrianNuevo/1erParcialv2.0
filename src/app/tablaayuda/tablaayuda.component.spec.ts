import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaayudaComponent } from './tablaayuda.component';

describe('TablaayudaComponent', () => {
  let component: TablaayudaComponent;
  let fixture: ComponentFixture<TablaayudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaayudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaayudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
