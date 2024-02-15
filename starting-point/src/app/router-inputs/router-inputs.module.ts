import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterInputsComponent } from './router-inputs.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RouterInputsComponent, ItemDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class RouterInputsModule {}
