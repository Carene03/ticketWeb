import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(private accountApi : AccountApi, private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountApi.logout().subscribe((val)=>{
      this.router.navigate(['login']);
    });
  }
}
