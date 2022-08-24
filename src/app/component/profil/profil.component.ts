import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AccountApi, AppUser, LoopBackAuth } from 'src/app/shared/sdk';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  @Input() user;
  currentUser;
  isAdmin;
  constructor(
    private us:UserService,
    private router : Router,
  ) { 
    // this.us.currentUser.subscribe((user)=>this.currentUser=user)
  }
  
  @Input() self:boolean=false;
  ngOnInit(): void {
    this.us.currentUser.subscribe(data=>this.currentUser=data);
    if(this.user)
    this.us.isAdmin(this.user).subscribe(data=>{
      this.isAdmin=data;
    });
    
  }
  ngAfterViewChecked(){
    

  }
  logout(){
    this.us.logout()
  }
}
