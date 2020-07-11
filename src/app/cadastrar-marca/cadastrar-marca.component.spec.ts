import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMarcaComponent } from './cadastrar-marca.component';

describe('CadastrarMarcaComponent', () => {
  let component: CadastrarMarcaComponent;
  let fixture: ComponentFixture<CadastrarMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
