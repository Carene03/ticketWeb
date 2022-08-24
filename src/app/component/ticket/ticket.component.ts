import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AccountApi, AppUserApi, LoopBackAuth, SupportTicketApi } from 'src/app/shared/sdk';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  file:Array<Filef>;
  @Input() ticket:any|SupportTicket;

  constructor(private router : Router, private ticketApi : SupportTicketApi, private fileApi :FilefApi) { }

  ngOnInit(): void {
  }

  detail(){
    this.router.navigate(['/detail/'+this.ticket.id]);
  }

  close(){
    this.ticketApi.closeTicket(this.ticket).subscribe((val) => {
      if(val) this.router.navigate(['']);
    });
  }

  getFiles(){
    let condistion = {
      resource: AppUser.getModelName(),
      recourceId: this.ticket.id
    }
    this.fileApi.getFile(condistion).subscribe((val) => {
      if (val) this.file = val;
    });
  }

}
