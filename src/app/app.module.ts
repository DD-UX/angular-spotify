import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { ViewsModule } from './views/views.module';
import { RouterConfig } from './app.router.config';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { GuardsModule } from './guards/guards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    CommonsModule,
    ViewsModule,
    ServicesModule,
    GuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
