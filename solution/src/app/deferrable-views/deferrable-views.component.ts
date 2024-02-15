import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, LazyLoadedComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {}
