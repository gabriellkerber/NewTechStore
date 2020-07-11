import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoListaImagemProdutoComponent } from './edicao-lista-imagem-produto.component';

describe('EdicaoListaImagemProdutoComponent', () => {
  let component: EdicaoListaImagemProdutoComponent;
  let fixture: ComponentFixture<EdicaoListaImagemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoListaImagemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoListaImagemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
