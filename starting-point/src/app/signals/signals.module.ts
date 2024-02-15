import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignalsComponent],
  imports: [CommonModule, FormsModule],
})
export class SignalsModule {}
