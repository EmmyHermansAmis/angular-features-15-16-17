import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';
import { ControlFlowsComponent } from './control-flows/control-flows.component';
import { RouterInputsComponent } from './router-inputs/router-inputs.component';
import { ItemDetailComponent } from './router-inputs/item-detail/item-detail.component';

export const routes: Routes = [
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'control-flows',
    component: ControlFlowsComponent,
  },
  {
    path: 'deferrable-views',
    component: DeferrableViewsComponent,
  },
  {
    path: 'router-inputs',
    children: [
      {
        path: '',
        component: RouterInputsComponent,
      },
      {
        path: 'item-details/:id',
        component: ItemDetailComponent,
        data: { name: 'Name passed from route' },
      },
    ],
  },
];
