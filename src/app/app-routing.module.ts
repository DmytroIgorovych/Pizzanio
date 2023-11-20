import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadPageComponent } from './components/head-page/head-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:'', component:HeadPageComponent},
  {path:'menu', component:MenuComponent},
  {path:'orders', component:OrdersComponent},
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
