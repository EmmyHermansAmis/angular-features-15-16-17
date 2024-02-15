import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes = [
    { path: 'router-inputs', title: 'Router Inputs' },
    { path: 'signals', title: 'Signals' },
    { path: 'control-flows', title: 'Control Flows' },
    { path: 'deferrable-views', title: 'Deferrable Views' },
  ];
}
