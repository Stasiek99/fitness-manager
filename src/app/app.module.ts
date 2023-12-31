import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './containers/app/app.component';
import {Store} from "../store";
import {AuthModule} from "../auth/auth.module";
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppNavComponent} from './components/app-nav/app-nav.component';
import {HealthModule} from "../health/health.module";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
