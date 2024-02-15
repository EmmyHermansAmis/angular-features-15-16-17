import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  routes = [
    { path: 'router-inputs', title: 'Router Inputs' },
    { path: 'signals', title: 'Signals' },
    { path: 'control-flows', title: 'Control Flows' },
    { path: 'deferrable-views', title: 'Deferrable Views' },
  ];
}
