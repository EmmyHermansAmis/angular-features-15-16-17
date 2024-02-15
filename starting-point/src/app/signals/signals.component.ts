import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  height = 5;
  width = 5;

  area = 25;

  person = { name: 'John', age: 30 };
  name = '';

  counter = 0;

  constructor() {}

  calculateArea() {
    this.area = this.height * this.width;
  }

  changeName() {
    this.person.name = this.name;
  }

  addToCounter() {
    this.counter += 1;
  }
}
