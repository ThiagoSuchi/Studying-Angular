import { Component, signal } from '@angular/core';
import { Title } from "../../components/shared/title/title";

@Component({
  selector: 'app-counter',
  imports: [Title],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    if (this.count() != 0)
    this.count.update(value => value - 1);

    return
  }

  reset() {
    this.count.set(0);
  }
}
