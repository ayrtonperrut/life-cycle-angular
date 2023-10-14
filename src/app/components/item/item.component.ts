import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngDoCheck(): void {

  }
  ngOnChanges(): void {

  }

  ngOnDestroy() {
  }

  ngOnInit(): void {
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
     this.emitindoIdParaDeletar.emit(this.item.id);
  }

  MarcarDesmarcarItem() {
    if (this.item.comprado === false) {
      this.item.comprado = true;
    } else {
      this.item.comprado = false;
    }
  }
}
