import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApi, LoopBackAuth } from 'src/app/shared/sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailOrUserName:string;
  password:string;

  constructor(private accountApi : AccountApi, private router : Router, private auth : LoopBackAuth) { }

  ngOnInit(): void {
    if(this.auth.getToken().id!=null){
      this.router.navigate(['']);
    }
    // if(!this.auth.getToken().id){
    //   this.router.navigate(['login']);
    // }else{
    //   this.router.navigate(['']);
    // }
  }

  login(){
    let data = {
      "username":this.emailOrUserName,
      "password":this.password
    }
    this.accountApi.login(data).subscribe((val)=>{
      if(val){
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
        if(!this.auth.getToken().id){
          this.auth.setUser(val);
          this.auth.setToken(val);
        }
      }
    });
  }

}
