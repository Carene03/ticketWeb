import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AppUser } from 'src/app/shared/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private us:UserService) { }
  isAdmin=false;
  currentUser:AppUser;
  ngOnInit(): void {
    this.us.currentUser.subscribe(data=>this.currentUser=data);
    this.us.currentIsAdmin.subscribe(data=>this.isAdmin=data);
    
  }

}
