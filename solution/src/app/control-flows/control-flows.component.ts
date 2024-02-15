import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flows',
  standalone: true,
  imports: [],
  templateUrl: './control-flows.component.html',
  styleUrl: './control-flows.component.scss',
})
export class ControlFlowsComponent {
  fruit = '';
  fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  fruit2 = '';
}
