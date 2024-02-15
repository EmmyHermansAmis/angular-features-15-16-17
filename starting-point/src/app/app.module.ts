import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlFlowsModule } from './control-flows/control-flows.module';
import { DeferrableViewsModule } from './deferrable-views/deferrable-views.module';
import { RouterInputsModule } from './router-inputs/router-inputs.module';
import { SignalsModule } from './signals/signals.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlFlowsModule,
    DeferrableViewsModule,
    RouterInputsModule,
    SignalsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
