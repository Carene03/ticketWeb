import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountApi, LoopBackAuth, SupportTicketApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  #open=true;
  tickets:Array<any>;
  @Input() set open(open:boolean){
    this.#open=open;
    // console.log(`get all ${open? "opened":"closed"} tickets`)
  }

  get open(){
    return this.#open;
  }
  constructor(private accountApi: AccountApi, private router : Router, private auth : LoopBackAuth ,private supportTicketApi : SupportTicketApi) { }

  ngOnInit(): void {
    console.log(this.auth.getToken().id);
    
    // this.accountApi.logout();
    if(this.auth.getToken().id==null){
      this.router.navigate(['login']);
    } else {
      this.findTicket();
    }
  }

  findTicket(){
    this.supportTicketApi.getTicket().subscribe((value) => {
      if (value) this.tickets = value.data;
      // console.log(value.data);
      
    });
  }

}
