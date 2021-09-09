import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { MainContactPopupComponent } from './main-contact-popup/main-contact-popup.component';
import { FormsModule } from '@angular/forms';
// import { MainContactPopupModule } from './main-contact-popup/main-contact-popup.module';
import { createCustomElement } from '@angular/elements';

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
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MainContactPopupComponent, { injector });
    customElements.define('ae-contact-form', customElement);
  }
  ngDoBootstrap() {
  }

}
