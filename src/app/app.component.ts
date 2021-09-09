import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MainContactPopupComponent } from './main-contact-popup/main-contact-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularElements';
}
