import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemASerEditado!: Item;
  editando = false;
  textoBtn = 'Salvar item';
  valorItem!: string;

  constructor(
    private listaService: ListaDeCompraService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['itemASerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemASerEditado?.nome;
    }

    if (changes['itemComprado'].firstChange) {

    }
  }

  ngOnInit(): void { }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();

  }

  limparCampo() {
    this.valorItem = '';
  }

  editarItem() {
    this.listaService.editarItemDaLista(this.itemASerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'salvar item'
  }
}
