import { Component, Input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
})
export class ItemDetailComponent {
  @Input({ alias: 'id', transform: numberAttribute }) itemId = -1;
  @Input() name = '';
}
