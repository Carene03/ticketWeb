import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TicketComponent } from './ticket/ticket.component';
import { RouterModule } from '@angular/router';
import { ReplyComponent } from './reply/reply.component';
import { InfoComponent } from './info/info.component';
import { TextComponent } from './text/text.component';
import { FileListComponent } from './file-list/file-list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    ProfilComponent,
    NavbarComponent,
    NavbarLeftComponent,
    PaginationComponent,
    TicketComponent,
    ReplyComponent,
    InfoComponent,
    TextComponent,
    FileListComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ProfilComponent,
    NavbarComponent,
    NavbarLeftComponent,
    PaginationComponent,
    TicketComponent,
    ReplyComponent,
    InfoComponent,
    TextComponent,
    FileListComponent,
    MatIconModule,
    AddComponent
  ]
})
export class ComponentModule { }
