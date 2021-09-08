import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGridComponent } from './main-grid/main-grid.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainContactPopupComponent } from './main-contact-popup/main-contact-popup.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainSliderComponent},
  {path: 'projects', component: MainGridComponent},
  {path: 'contact', component: MainContactPopupComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
