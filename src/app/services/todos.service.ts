import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: "Comprar lixadeira da devault", completed: false },
    { id: crypto.randomUUID(), title: "Buscar furadeira de impacto", completed: false },
    { id: crypto.randomUUID(), title: "Comprar parafusos para madeira", completed: false },
    { id: crypto.randomUUID(), title: "Medir área da varanda", completed: true },
    { id: crypto.randomUUID(), title: "Comprar óculos de proteção", completed: false },
    { id: crypto.randomUUID(), title: "Cortar aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaripas de pinus", completed: false },
  ]);

  readonly items = this._items.asReadonly();

  itemCompleted(item: Todo) {
    item.completed = !item.completed;
  }

  delete = signal(false);

  showDelete() {
    this.delete.update(val => !val);
  }

  removeTask(id: string) {
    this._items.update(item => item.filter(item => item.id != id));
  }
}
