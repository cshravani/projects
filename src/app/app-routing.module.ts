import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { ShowResComponent } from './reservations/show-res/show-res.component';

const routes: Routes = [{
  path:'', component: ReservationsComponent},
{
  path:'home',component:ShowResComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
