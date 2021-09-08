import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { MainContactPopupComponent } from './main-contact-popup/main-contact-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainSliderComponent,
    MainGridComponent,
    MainContactPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
