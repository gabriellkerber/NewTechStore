import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCorComponent } from './editar-cor.component';

describe('EditarCorComponent', () => {
  let component: EditarCorComponent;
  let fixture: ComponentFixture<EditarCorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
