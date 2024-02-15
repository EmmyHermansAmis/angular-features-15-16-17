import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-router-inputs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './router-inputs.component.html',
  styleUrl: './router-inputs.component.scss',
})
export class RouterInputsComponent {
  items = ['Table', 'Chair', 'Pen', 'Cup'];
}
