import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferrableViewsComponent } from './deferrable-views.component';
import { LazyLoadedComponent } from './lazy-loaded/lazy-loaded.component';

@NgModule({
  declarations: [DeferrableViewsComponent, LazyLoadedComponent],
  imports: [CommonModule],
})
export class DeferrableViewsModule {}
