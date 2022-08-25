import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './page/detail/detail.component';
import { TicketListComponent } from './page/ticket-list/ticket-list.component';
import { HomeComponent } from './page/home/home.component';

import { LoginComponent } from './page/login/login.component';
import { UserComponent } from './page/user/user.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent,children:[
    {path:"",component:TicketListComponent},
    {path:"ticket/:id",component:TicketListComponent},
    {path:"detail/:id",component:DetailComponent},
    {path:"user",component:UserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
