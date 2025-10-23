import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePrueba } from './componente-prueba';

describe('ComponentePrueba', () => {
  let component: ComponentePrueba;
  let fixture: ComponentFixture<ComponentePrueba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePrueba]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePrueba);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
