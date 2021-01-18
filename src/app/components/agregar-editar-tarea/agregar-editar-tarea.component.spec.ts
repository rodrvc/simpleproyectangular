import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarTareaComponent } from './agregar-editar-tarea.component';

describe('AgregarEditarTareaComponent', () => {
  let component: AgregarEditarTareaComponent;
  let fixture: ComponentFixture<AgregarEditarTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarEditarTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
