import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SupportTicket } from 'src/app/shared/sdk';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket:any|SupportTicket;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  detail(){
    this.router.navigate(['/detail/'+this.ticket.id]);
  }

}
