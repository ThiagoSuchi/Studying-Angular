import { effect, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Todo[]>([]);

  readonly items = this._items.asReadonly();

  constructor() {
    this._load();

    effect(() => {
      const items = this._items();
      localStorage.setItem('todos', JSON.stringify(items));
    })
  }

  itemCompleted(item: Todo) {
    item.completed = !item.completed;
  }

  addTasck(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    this._items.update((item) => [...item, newTodo]);
  }

  delete = signal(false);

  showDelete() {
    this.delete.update(val => !val);
  }

  removeTask(id: string) {
    this._items.update(item => item.filter(item => item.id != id));
  }

  private _load() {
    const storedTodos = localStorage.getItem('todos');

    storedTodos ? this._items.set(JSON.parse(storedTodos))
    : this._items.set([]);
  }
}
