import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
import { AppRouterModule } from './app.routing';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppAboutComponent } from './components/app-about/app-about.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';
import { AppPagenotfoundComponent } from './components/app-pagenotfound/app-pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppAboutComponent,
    AppContactComponent,
    AppPagenotfoundComponent
  ],
  imports: [ BrowserModule, SharedModule,
    ColorToolModule, CarToolModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
