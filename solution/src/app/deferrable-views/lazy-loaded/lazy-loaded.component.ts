import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded',
  standalone: true,
  imports: [],
  templateUrl: './lazy-loaded.component.html',
  styleUrl: './lazy-loaded.component.scss',
})
export class LazyLoadedComponent {
  @Input({ required: true }) name: string = '';
}
