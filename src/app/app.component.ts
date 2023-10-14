import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaEditar! : Item;

  constructor(
    private listaService: ListaDeCompraService) { }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }


  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra()
  }

  editaItem(item: Item) {
    this.itemParaEditar = item;
  }

  deletarItem(id: Number) {
    const index = this.listaDeCompra.findIndex((item => item.id === id));
    this.listaDeCompra.splice(index, 1);
  }

  limparLista() {
    this.listaDeCompra = [];
  }

  comprarItem(item: Item) {

    const itemComprado : Item = {
      id: item.id,
      nome: item.nome,
      data: item.data,
      comprado: true
    }

    const id = item.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemComprado);
  }
}
