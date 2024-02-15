import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  height = signal(5);
  width = signal(5);

  area = computed(() => this.height() * this.width());

  person = signal({ name: 'John', age: 30 });
  name = '';

  counter = signal(0);

  constructor() {
    effect(() => console.log('Value changed:', this.area()));
  }

  changeName() {
    const person = Object.assign({}, this.person(), { name: this.name });
    this.person.set(person);
  }

  addToCounter() {
    this.counter.update((count) => count + 1);
  }
}
