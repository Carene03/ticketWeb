import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SupportTicket, SupportTicketApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket:any|SupportTicket;

  constructor(private router : Router, private ticketApi : SupportTicketApi) { }

  ngOnInit(): void {
  }

  detail(){
    this.router.navigate(['/detail/'+this.ticket.id]);
  }

  close(){
    this.ticketApi.closeTicket(this.ticket).subscribe((val) => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });;

    });
  }

}
