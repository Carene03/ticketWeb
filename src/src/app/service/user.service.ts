import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountApi, AppUserApi, LoopBackAuth, UserApi } from '../shared/sdk';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router:Router,
    private auth:LoopBackAuth,
    private accountApi:AccountApi,
    private userApi:AppUserApi
  ){
  }


  get currentIsAdmin(){
    return new Observable<any>(observer=>{
      this.currentUser.subscribe((user=>{
        
        this.isAdmin(user).subscribe(rep=>{
          
          
           observer.next(rep);
           observer.complete()
        })
      }))


   })
    
  }
  
  isAdmin(user:any){
    return new Observable<any>(observer=>{
      if(user){
        this.accountApi.getRole(user.id)
        .subscribe((data=>{
          observer.next(data[0].id==1);
          observer.complete()
         }))
      }
      else{
        observer.next(false);
        observer.complete()
      }


    })
  }


  get currentUser(){
    return new Observable<any>(observer=>{
      this.userApi.find({
        where:{
          id:this.auth.getCurrentUserId()
        }
      }).subscribe(data=>{
        observer.next(data[0]);
        observer.complete();
      })

    })
    
  }
  
  logout(){
    this.accountApi.logout().subscribe((val)=>{
      this.router.navigate(['login']);
    });
  }
  checkRole(user:any){
    return this.accountApi.getRole(user.id)
  }

}
