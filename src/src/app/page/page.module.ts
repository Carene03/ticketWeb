import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    TicketListComponent,
    DetailComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    TicketListComponent,
    DetailComponent,
    UserComponent
  ]
})
export class PageModule { }
