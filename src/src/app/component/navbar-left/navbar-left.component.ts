import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AccountApi, AppUser, LoopBackAuth } from 'src/app/shared/sdk';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {

  constructor(public us:UserService) { }
  isAdmin=false;
  user:AppUser;
  ngOnInit(): void {
    this.us.currentIsAdmin.subscribe(data=>this.isAdmin=data);
    
  }
  
}
