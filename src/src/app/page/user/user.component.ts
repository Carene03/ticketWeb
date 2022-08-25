import { Component, OnInit } from '@angular/core';
import { AppUserApi, LoopBackAuth, SupportTicketApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user=[]
  constructor( private auth : LoopBackAuth,private userApi:AppUserApi) { }

  ngOnInit(): void {
    this.userApi.find({}).subscribe((user)=>this.user=user)
  }

}
