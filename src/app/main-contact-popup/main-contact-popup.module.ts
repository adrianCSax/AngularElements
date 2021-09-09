// import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { MainContactPopupComponent } from './main-contact-popup.component';
// import { createCustomElement } from '@angular/elements';

// @NgModule({
//   imports: [CommonModule],
//   declarations: [
//     MainContactPopupComponent
//   ],
//   exports: [MainContactPopupComponent],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
// })
// export class MainContactPopupModule { 
//     constructor(private injector: Injector) {
//         const customElement = createCustomElement(MainContactPopupComponent, { injector });
//         customElements.define('ae-contact-form', customElement);
//       }
//       ngDoBootstrap() {
//       }

//       static forRoot() {
//         return {
//           ngModule: MainContactPopupModule
//         }
//       }
// }